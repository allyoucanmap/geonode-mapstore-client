/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
*/

import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import uniqBy from 'lodash/uniqBy';
import orderBy from 'lodash/orderBy';
import omit from 'lodash/omit';
import pick from 'lodash/pick';
import merge from 'lodash/merge';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Dropzone from 'react-dropzone';
import ViewerLayout from '@js/components/ViewerLayout';
import FaIcon from '@js/components/FaIcon';
import Button from '@js/components/Button';
import Spinner from '@js/components/Spinner';
import Badge from '@js/components/Badge';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import {
    getPendingUploads,
    getProcessedUploadsById
} from '@js/api/geonode/v2';
import axios from '@mapstore/framework/libs/ajax';
import moment from 'moment';

const supportedDatasetTypes = [
    {
        id: 'shp',
        label: 'ESRI Shapefile',
        format: 'vector',
        ext: ['shp'],
        requires: ['shp', 'prj', 'dbf', 'shx']
    },
    {
        id: 'asc',
        label: 'ASCII Text File',
        format: 'raster',
        ext: ['asc']
    },
    {
        id: 'tiff',
        label: 'GeoTIFF',
        format: 'raster',
        ext: ['tiff', 'tif'],
        mimeType: ['image/tiff']
    },
    // requires geonode.importer
    {
        id: 'csv',
        label: 'Comma Separated Value',
        format: 'vector',
        ext: ['csv'],
        mimeType: ['text/csv']
    },
    {
        id: 'kml',
        name: 'Google Earth KML',
        format: 'archive',
        ext: ['kml']
    },
    {
        id: 'kmz',
        label: 'Google Earth KMZ',
        format: 'archive',
        ext: ['kmz']
    },
    {
        id: 'geojson',
        label: 'GeoJSON',
        format: 'vector',
        ext: ['json', 'geojson'],
        mimeType: ['application/json', 'application/geo+json']
    },
    {
        id: 'zip',
        label: 'Zip Archive',
        format: 'archive',
        ext: ['zip'],
        mimeType: ['application/zip']
    }
];

const supportedExtensions = supportedDatasetTypes.map(({ ext }) => ext || []).flat();
const supportedMimeTypes = supportedDatasetTypes.map(({ mimeType }) => mimeType || []).flat();
const supportedRequiresExtensions = supportedDatasetTypes.map(({ requires }) => requires || []).flat();

function getFileNameParts(file) {
    const { name } = file;
    const nameParts = name.split('.');
    const ext = nameParts[nameParts.length - 1];
    const baseName = [...nameParts].splice(0, nameParts.length - 1).join('.');
    return { ext, baseName };
}

function getDatasetFileType(file) {
    const { type } = file;
    const { ext } = getFileNameParts(file);
    const datasetFileType = supportedDatasetTypes.find((fileType) =>
        (fileType.ext || []).includes(ext)
        || (fileType.mimeType || []).includes(type)
        || (fileType.requires || []).includes(ext)
    );
    return datasetFileType?.id;
}

function UploadDataset({
    refreshTime = 3000
}) {

    const [waitingUploads, setWaitingUploads] = useState({});
    const [readyUploads, setReadyUploads] = useState({});

    function parseUploadFiles(uploadFiles) {
        console.log(uploadFiles);
        return Object.keys(uploadFiles)
            .reduce((acc, baseName) => {
                const uploadFile = uploadFiles[baseName];
                const { requires = [], ext = []} = supportedDatasetTypes.find(({ id }) => id === uploadFile.type) || {};
                const cleanedFiles = pick(uploadFiles[baseName].files, [...requires, ...ext]);
                const filesKeys = Object.keys(cleanedFiles);
                const files = requires.length > 0
                    ? cleanedFiles
                    : filesKeys.length > 1
                        ? pick(cleanedFiles, ext[0])
                        : cleanedFiles;
                const missingExt = requires.filter((fileExt) => !filesKeys.includes(fileExt));
                return {
                    ...acc,
                    [baseName]: {
                        ...uploadFile,
                        mainExt: filesKeys.find(key => ext.includes(key)),
                        files,
                        missingExt
                    }
                };
            }, {});
    }

    function updateWaitingUploads(uploadFiles) {
        const newWaitingUploads = parseUploadFiles(uploadFiles);
        setWaitingUploads(newWaitingUploads);
        const newReadyUploads = Object.keys(newWaitingUploads)
            .reduce((acc, baseName) => {
                if (newWaitingUploads[baseName]?.missingExt?.length > 0) {
                    return acc;
                }
                return {
                    ...acc,
                    [baseName]: newWaitingUploads[baseName]
                };
            }, {});
        setReadyUploads(newReadyUploads);
    }

    function handleDrop(files) {
        const checkedFiles = files.map((file) => {
            const { type } = file;
            const { ext } = getFileNameParts(file);
            return {
                supported: !!(supportedMimeTypes.includes(type) || supportedExtensions.includes(ext) || supportedRequiresExtensions.includes(ext)),
                file
            };
        });
        const uploadsGroupedByName = checkedFiles
            .filter(({ supported }) => supported)
            .reduce((acc, { file }) => {
                const { ext, baseName } = getFileNameParts(file);
                const type = getDatasetFileType(file);
                return {
                    ...acc,
                    [baseName]: {
                        type,
                        files: {
                            ...acc[baseName]?.files,
                            [ext]: file
                        }
                    }
                };
            }, {});

        const newWaitingUploads = { ...merge(waitingUploads, uploadsGroupedByName) };
        updateWaitingUploads(newWaitingUploads);
    }

    function parseUploadResponse(response) {
        return orderBy(uniqBy([...response], 'id'), 'create_date', 'desc');
    }

    const [pendingUploads, setPendingUploads] = useState([]);
    const [loading, setLoading] = useState(false);
    const isMounted = useRef(true);
    const updatePending = useRef();
    updatePending.current = () => {
        if (!loading) {
            setLoading(true);
            getPendingUploads()
                .then((newPendingUploads) => {
                    if (isMounted.current) {
                        const newIds = newPendingUploads.map(({ id }) => id);
                        const missingIds = pendingUploads
                            .filter(upload => upload.state !== 'PROCESSED' && !newIds.includes(upload.id))
                            .map(({ id }) => id);
                        const currentProcessed = pendingUploads.filter((upload) => upload.state === 'PROCESSED');
                        if (missingIds.length > 0) {
                            getProcessedUploadsById(missingIds)
                                .then((processed) => {
                                    setPendingUploads(parseUploadResponse([
                                        ...processed,
                                        ...currentProcessed,
                                        ...newPendingUploads
                                    ]));
                                    setLoading(false);
                                })
                                .catch(() => {
                                    setPendingUploads(parseUploadResponse([
                                        ...currentProcessed,
                                        ...newPendingUploads
                                    ]));
                                    setLoading(false);
                                });
                        } else {
                            setPendingUploads(parseUploadResponse([
                                ...currentProcessed,
                                ...newPendingUploads
                            ]));
                            setLoading(false);
                        }
                    }
                })
                .catch(() => {
                    if (isMounted.current) {
                        setLoading(false);
                    }
                });
        }
    };

    function handleDelete({ id, deleteUrl }) {
        axios.get(deleteUrl)
            .then(() => {
                if (isMounted.current) {
                    setPendingUploads(pendingUploads.filter(upload => upload.id !== id));
                }
            });
    }

    useEffect(() => {
        isMounted.current = true;
        updatePending.current();
        const interval = setInterval(() => {
            updatePending.current();
        }, refreshTime);
        return () => {
            clearInterval(interval);
            isMounted.current = false;
        };
    }, []);

    const inputFile = useRef();


    function handleUploadProcess() {
        axios.all(Object.keys(readyUploads).map((baseName) => {
            const readyUpload = readyUploads[baseName];
            const formData = new FormData();
            formData.append('base_file', readyUpload.files[readyUpload.mainExt]);
            formData.append('permissions', JSON.stringify({ users: { AnonymousUser: [] }, groups: {}}));
            formData.append('charset', 'UTF-8');
            const { timeEnabled } = getConfigProp('geoNodeSettings') || {};
            if (timeEnabled) {
                formData.append('time', ['csv', 'shp'].includes(readyUpload.mainExt) ? true : false);
            }
            Object.keys(readyUpload.files)
                .forEach((ext) => {
                    formData.append(ext + '_file', readyUpload.files[ext]);
                });

            return axios.post('/upload/', formData)
                .then(({ data }) => ({ status: 'success', data, baseName }))
                .catch((error) => ({ status: 'error', error, baseName }));
        }))
            .then((responses) => {
                const successful = responses.filter(({ status }) => status === 'success').map(({ baseName }) => baseName);
                updateWaitingUploads(omit(waitingUploads, successful));
                updatePending.current();
            });
    }

    return (
        <Dropzone
            multiple
            onDrop={handleDrop}
            className="gn-upload-dropzone"
            activeClassName="gn-dropzone-active"
            rejectClassName="gn-dropzone-reject"
            disableClick
        >
            <ViewerLayout
                leftColumn={
                    <div className="gn-upload-waiting">
                        <div className="gn-upload-waiting-header">
                            <input ref={inputFile} type="file" multiple onChange={(event) => handleDrop([...event?.target?.files])} style={{ display: 'none' }}/>
                            <Button onClick={() => inputFile?.current?.click()}>
                                <FaIcon name="plus"/>{' '}Select files...
                            </Button>
                        </div>
                        <ul>
                            {(Object.keys(waitingUploads)).map((baseName) => {
                                const { files, missingExt = [] } = waitingUploads[baseName];
                                const filesExt = Object.keys(files);
                                return (
                                    <li key={baseName} className="gn-upload-waiting-card">
                                        <div>
                                            <div className="gn-upload-waiting-card-info">
                                                {missingExt.length > 0 && <div className="gn-upload-waiting-card-error"><FaIcon name="exclamation"/></div>}
                                                <div className="gn-upload-waiting-card-title">{baseName}</div>
                                                <Button size="xs" onClick={() => updateWaitingUploads(omit(waitingUploads, baseName))}>
                                                    <FaIcon name="trash"/>
                                                </Button>
                                            </div>
                                            {<ul>
                                                {filesExt.map(ext => {
                                                    return (
                                                        <li key={ext}>
                                                            <Badge>.{ext}</Badge>
                                                        </li>
                                                    );
                                                })}
                                            </ul>}
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="gn-upload-waiting-footer">
                            <Button
                                variant="success"
                                disabled={Object.keys(readyUploads).length === 0}
                                onClick={handleUploadProcess}
                            >
                                Upload
                            </Button>
                        </div>
                    </div>
                }
            >
                <div className="gn-upload-pending">
                    <ul>
                        {pendingUploads.map(({
                            id,
                            name,
                            progress = 0,
                            state,
                            create_date: createDate,
                            detail_url: detailUrl,
                            resume_url: resumeUrl,
                            delete_url: deleteUrl
                        }) => {
                            return (
                                <li key={id} className="gn-upload-waiting-card">
                                    <div className="gn-upload-waiting-card-info">
                                        {state === 'INVALID' && <div className="gn-upload-waiting-card-error"><FaIcon name="exclamation"/></div>}
                                        <div className="gn-upload-waiting-card-title">
                                            {detailUrl
                                                ? <a
                                                    href={detailUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    {name}
                                                </a>
                                                : name}
                                        </div>
                                        {state === 'PENDING' && <Spinner />}
                                        {deleteUrl && <Button size="xs" onClick={() => handleDelete({ id, deleteUrl })}>
                                            <FaIcon name="trash"/>
                                        </Button>}
                                    </div>
                                    <div className="gn-upload-waiting-card-options">
                                        <div>{moment(createDate).format('MMMM Do YYYY')}</div>
                                        <div className="gn-upload-waiting-card-tools">
                                            {resumeUrl && <Button
                                                variant="primary"
                                                size="xs"
                                                href={resumeUrl}
                                            >
                                                Complete upload
                                            </Button>}
                                        </div>
                                    </div>
                                    <div className={`gn-upload-waiting-card-progress ${state && state.toLowerCase() || ''}`} style={{
                                        width: `100%`,
                                        height: 2
                                    }}>
                                        <div style={{
                                            width: `${progress}%`,
                                            height: 2,
                                            transition: '0.3s all'
                                        }}></div>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </ViewerLayout>
        </Dropzone>
    );
}

UploadDataset.propTypes = {
    location: PropTypes.object
};

UploadDataset.defaultProps = {

};

const ConnectedUploadDataset = connect(
    createSelector([], () => ({}))
)(UploadDataset);

export default ConnectedUploadDataset;
