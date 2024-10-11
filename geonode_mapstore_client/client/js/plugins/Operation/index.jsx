/*
 * Copyright 2024, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useEffect, useRef, useState } from 'react';
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Button from '@js/components/Button/Button';
import { selectOperation, reloadOperation } from './actions/operation';
import { getResourceData } from '@js/selectors/resource';
import operation from './reducers/operation';
import epics from './epics/operation';
import { Alert, Glyphicon } from 'react-bootstrap';
import axios from '@mapstore/framework/libs/ajax';
import Dropzone from 'react-dropzone';
import FaIcon from '@js/components/FaIcon';
import tooltip from '@mapstore/framework/components/misc/enhancers/tooltip';
import Badge from '@js/components/Badge';
import Message from '@mapstore/framework/components/I18N/Message';
import Spinner from '@js/components/Spinner';
import ViewerLayout from '@js/components/ViewerLayout';
import uuidv1 from 'uuid/v1';
import { getFileNameParts } from '@js/utils/FileUtils';
import ErrorMessageWithTooltip from '../../routes/upload/ErrorMessageWithTooltip';
import isFunction from 'lodash/isFunction';
import moment from 'moment';
import { getUploadErrorMessageFromCode } from '@js/utils/ErrorUtils';
import {
    deleteExecutionRequest
} from '@js/api/geonode/v2';
function ErrorButton(props) {
    return (
        <div {...props} style={{ width: 'fit-content', margin: 'auto' }} className="gn-disabled-upload">
            <Button disabled variant="primary">
                <Message msgId="gnviewer.upload" />
            </Button>
        </div>
    );
}

const ButtonWithTooltip = tooltip(ErrorButton);

const getSize = (files, asLabel) => {
    const bytes = Object.keys(files).reduce((sum, ext) => {
        return sum + files[ext].size;
    }, 0);
    const mb = bytes / (1024 * 1024);
    if (asLabel) {
        return mb > 0.9 ? `${Math.ceil(mb)} MB` : `${Math.ceil(mb * 1024)} KB`;
    }
    return mb;
};

const getExceedingFileSize = (uploads, limit) => {
    return uploads.some(({ files }) => getSize(files) > limit);
};

function PendingUploadCard({
    data,
    loading,
    progress,
    error,
    onCancel,
    onRemove
}) {
    const { id, missingExtensions: uploadMissingExtension = [], baseName, ext: extensions, files } = data;
    const missingMainFile = uploadMissingExtension.length === 1 && uploadMissingExtension[0] === '*';
    const missingExtensions = missingMainFile ? [] : uploadMissingExtension;
    return (
        <div className="gn-upload-card">
            <div className="gn-upload-card-header">
                {(missingExtensions.length > 0 || missingMainFile) ? <div className="gn-upload-card-error"><FaIcon name="exclamation" /></div> : null}
                <div className="gn-upload-card-title">{baseName}</div>
                <div>
                    {error ? <ErrorMessageWithTooltip tooltipId={<Message msgId="gnviewer.invalidUploadMessageErrorTooltip" />} /> : null}
                    {onRemove
                        ? (!loading || !progress) ? <Button size="xs" onClick={onRemove}>
                            <FaIcon name="trash" />
                        </Button> : <Button size="xs" onClick={() => onCancel([id])}>
                            <FaIcon name="stop" />
                        </Button>
                        : null}
                </div>
            </div>
            {missingExtensions.length > 0 && <div className="gn-upload-card-body">
                <div className="text-danger">
                    <Message msgId="gnviewer.missingFiles" />: {missingExtensions.join(', ')}
                </div>
            </div>}
            {missingMainFile && <div className="gn-upload-card-body">
                <div className="text-danger">
                    <Message msgId="gnviewer.addMainFiles" />
                </div>
            </div>}
            <div className="gn-upload-card-bottom">
                <ul>
                    {extensions.map(ext => {
                        return (
                            <li key={ext}>
                                <Badge>.{ext}</Badge>
                            </li>
                        );
                    })}
                </ul>
                {
                    (loading && progress) ?
                        <div className="gn-upload-card-progress-read">
                            {progress < 100 ? `${progress}%` : <Spinner />}
                        </div> :
                        <div>{getSize(files, true)}</div>
                }
            </div>
            {(loading && progress) ? <div style={{ position: 'relative' }}>
                <div
                    className="gn-upload-card-progress"
                    style={{
                        width: '100%',
                        height: 2
                    }}
                >
                    <div
                        style={{
                            width: `${progress}%`,
                            height: 2,
                            transition: '0.3s all'
                        }}
                    >
                    </div>
                </div>
            </div> : null}
        </div>
    );
}

function UploadPanel({
    loading,
    children,
    maxParallelUploads,
    maxAllowedSize,
    supportedFiles,
    enableRemoteFiles,
    onUpload,
    onCancel,
    progress,
    errors,
    completed,
    rightColumn,
    disabled
}) {

    const inputFile = useRef();

    const [uploads, setUploads] = useState([]);

    useEffect(() => {
        setUploads(prevUploads => prevUploads.filter(upload => !completed[upload.id]));
    }, [completed]);

    const getSupportedTypes = (ext) => {
        return supportedFiles.filter((supportedType) =>
            ([...supportedType.ext, ...(supportedType.optionalExt || [])].includes(ext))
        );
    };

    function handleAdd(newAddedUploads = []) {
        const newUploads = newAddedUploads.reduce((acc, _upload) => {
            if (_upload.type === 'remote') {
                acc.push(_upload);
                return acc;
            }
            const { file, ext, baseName, id } = _upload;
            const entry = acc.find((upload) => {
                if (upload.type === 'file' && upload.baseName === baseName) {
                    const currentSupportedTypes = getSupportedTypes(ext);
                    return currentSupportedTypes
                        ? currentSupportedTypes.find((supportedType) => {
                            return upload.ext.every(uploadExt => [...supportedType.ext, ...(supportedType.optionalExt || [])].includes(uploadExt));
                        })
                        : false;
                }
                return false;
            });
            if (entry) {
                entry.files = { ...entry.files, [ext]: file };
                if (!entry.ext.includes(ext)) {
                    entry.ext.push(ext);
                }
            } else {
                acc.push({
                    id,
                    baseName,
                    type: 'file',
                    files: { [ext]: file },
                    ext: [ext],
                    supported: !!getSupportedTypes(ext)?.length
                });
            }
            return acc;
        }, [...uploads.filter(upload => upload.supported)]);

        const validatedUploads = newUploads.map((upload) => {
            if (!upload.supported) {
                return upload;
            }
            const currentSupportedType = supportedFiles.find((supportedType) => {
                return upload.ext.every(uploadExt => [...supportedType.ext, ...(supportedType.optionalExt || [])].includes(uploadExt));
            });
            if (!currentSupportedType) {
                return {
                    ...upload,
                    supported: false
                };
            }
            const missingExtensions = currentSupportedType.ext.filter(ext => !upload.ext.includes(ext));
            const supportedTypeExtensions = [...currentSupportedType.ext, ...(currentSupportedType.optionalExt || [])];
            return {
                ...upload,
                ext: [...upload.ext].sort((a, b) => supportedTypeExtensions.indexOf(a) - supportedTypeExtensions.indexOf(b)),
                ready: missingExtensions.length === 0,
                missingExtensions: missingExtensions.length > 0 && missingExtensions.length === currentSupportedType.ext.length
                    ? ['*']
                    : missingExtensions
            };
        });

        setUploads(validatedUploads);
    }

    function handleRemove(id) {
        setUploads(uploads.filter((upload) => upload.id !== id));
    }

    const handleFile = (files) => {
        return handleAdd(files.map((file) => {
            const { ext, baseName } = getFileNameParts(file);
            return { id: uuidv1(), type: 'file', file, ext, baseName };
        }));
    };

    const handleRemote = () => {
        return handleAdd([{ id: uuidv1(), type: 'remote', url: '' }]);
    };

    const supportedLabels = supportedFiles.map(supportedFile => supportedFile.label).join(', ');
    const supportedUploads = uploads.filter(upload => upload.supported);
    const readyUploads = uploads.filter(upload => upload.ready);
    const unsupportedLabels = uploads.filter(upload => !upload.supported).map((upload) => `${upload.baseName}.${upload?.ext?.[0] || ''}`).join(', ');
    const disabledAdd = disabled || loading || readyUploads.length === maxParallelUploads;
    return (
        <Dropzone
            multiple
            onDrop={handleFile}
            className="gn-upload-panel"
            activeClassName="gn-dropzone-active"
            rejectClassName="gn-dropzone-reject"
            disableClick
        >
            <ViewerLayout
                rightColumn={rightColumn}
                leftColumn={<div className="gn-upload-list">
                    <div className="gn-upload-list-header">
                        <input disabled={disabledAdd} ref={inputFile} value="" type="file" multiple onChange={(event) => handleFile([...event?.target?.files])} style={{ display: 'none' }} />
                        <Button disabled={disabledAdd} onClick={() => inputFile?.current?.click()}>
                            <FaIcon name="plus" /><Message msgId="gnviewer.selectFiles" />
                        </Button>
                        {enableRemoteFiles && <Button disabled={disabledAdd} className={"add-url"} onClick={() => handleRemote}>
                            <FaIcon name="plus" /><Message msgId="gnviewer.addFromUrl" />
                        </Button>}
                    </div>
                    {supportedUploads.length > 0
                        ? (
                            <ul>
                                {supportedUploads.map((upload) => {
                                    return (
                                        <li key={upload.id}>
                                            <PendingUploadCard
                                                data={upload}
                                                progress={progress[upload.id]}
                                                loading={loading}
                                                error={errors[upload.id]}
                                                onCancel={onCancel}
                                                onRemove={() => handleRemove(upload.id)}
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        )
                        : (
                            <div
                                style={{
                                    position: 'relative',
                                    width: '100%',
                                    flex: 1,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '1rem',
                                    textAlign: 'center'
                                }}
                            >
                                <div><Message msgId="gnviewer.supportedFiles" />: {supportedLabels}</div>
                            </div>
                        )}
                    <div className="gn-upload-list-footer">
                        {unsupportedLabels ? <Alert bsStyle="danger">
                            <Message msgId="gnviewer.unsupportedFiles" />{unsupportedLabels ? `: ${unsupportedLabels}` : ''}
                        </Alert> : null}
                        {(uploads.length > 0 && getExceedingFileSize(uploads, maxAllowedSize)) ?
                            <ButtonWithTooltip noTooltipWhenDisabled tooltip={<Message msgId="gnviewer.exceedingFileMsg" msgParams={{ limit: maxAllowedSize }} />} >
                                <Message msgId="gnviewer.upload" />
                            </ButtonWithTooltip>
                            : supportedUploads.length > maxParallelUploads ?
                                <ButtonWithTooltip noTooltipWhenDisabled tooltip={<Message msgId="gnviewer.parallelUploadLimit" msgParams={{ limit: maxParallelUploads }} />} >
                                    <Message msgId="gnviewer.upload" />
                                </ButtonWithTooltip>
                                :
                                !loading ? <Button
                                    variant="primary"
                                    disabled={readyUploads.length === 0 || disabled}
                                    onClick={() => onUpload(readyUploads)}
                                >
                                    <Message msgId="gnviewer.upload" />
                                </Button> : <Button
                                    variant="primary"
                                    onClick={() => onCancel(readyUploads.map((upload) => upload.id))}
                                >
                                    <Message msgId="gnviewer.cancelUpload" />
                                </Button>}
                    </div>
                    {disabled ? <div className="gn-upload-list-cover" /> : null}
                </div>}
            >
                {children}
            </ViewerLayout>
        </Dropzone>
    );
}

const cancelTokens = {};
const sources = {};


function ExecutionRequestTable({
    titleMsgId = '',
    descriptionMsgId = '',
    iconName = '',
    requests,
    onReload,
    onDelete
}) {

    if (!requests.length) {
        return (
            <div className="gn-upload-processing">
                <div className="gn-main-event-container">
                    <div className="gn-main-event-content">
                        <div className="gn-main-event-text">
                            <div className="gn-main-icon">
                                <FaIcon name={iconName}/>
                            </div>
                            <h1><Message msgId={titleMsgId}/></h1>
                            <div><Message msgId={descriptionMsgId}/></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="gn-upload-processing">
            <div className="gn-upload-processing-list">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {requests.map((request) => {
                            const detailUrls = (request?.output_params.resources || [])?.map(res=> res.detail_url);
                            return (
                                <tr key={request.exec_id} className={request.status === 'failed' ? 'danger' : ''}>
                                    <th>{request.name}</th>
                                    <th>{moment(request.created).format('MMMM Do YYYY, h:mm:ss a')}</th>
                                    <th>
                                        {request.status === 'running' ? <Spinner/> : null}
                                        {request.status === 'failed'
                                            ? <>
                                                <Message msgId="gnviewer.invalidUploadMessageError" />{' '}
                                                <ErrorMessageWithTooltip tooltipPosition="left" tooltip={request.log ? getUploadErrorMessageFromCode(null, request.log) : undefined} />
                                            </>
                                            : null}
                                        {request.status === 'finished' && detailUrls?.[0]
                                            ? <Button
                                                variant="primary"
                                                onClick={() => onDelete(request.exec_id)}
                                                href={detailUrls[0]}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Message msgId={'gnviewer.view'} />
                                            </Button>
                                            : null}
                                        {!(request.status === 'finished' && !detailUrls?.[0])
                                            ? null
                                            : onReload
                                                ? <Button variant="primary" onClick={() => onReload()}>
                                                    <Message msgId={'gnviewer.reload'} />
                                                </Button>
                                                : <FaIcon name="check" />}
                                    </th>
                                    <th>
                                        <Button onClick={() => onDelete(request.exec_id)}>
                                            <FaIcon name="trash" />
                                        </Button>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const useExecutionRequest = ({
    api,
    forceRequests,
    refreshTime,
    onRefresh = () => {}
}) => {
    const isMounted = useRef(true);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        isMounted.current = true;
        const updateExecutions = () => {
            axios.get(api.url, {
                params: {
                    page_size: 9999,
                    ...api.params
                }
            })
                .then(({ data }) => {
                    if (isMounted.current) {
                        setRequests(data?.requests || []);
                        onRefresh(data?.requests);
                    }
                });
        };
        updateExecutions();
        const interval = setInterval(() => {
            updateExecutions();
        }, refreshTime);
        return () => {
            clearInterval(interval);
            isMounted.current = false;
        };
    }, [refreshTime, forceRequests, onRefresh]);

    return {
        requests,
        deleteRequest: (id) => {
            if (isMounted.current) {
                setRequests(prevRequests => prevRequests.filter(request => request.exec_id !== id));
            }
            deleteExecutionRequest(id);
        }
    };
};

const useUpload = ({
    api,
    onComplete = () => {}
}) => {

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const [completed, setCompleted] = useState({});
    const [progress, setProgress] = useState({});

    const getUploadRequestPayload = (upload) => {
        const payload = Object.keys(api.body).reduce((acc, key) => {
            return {
                ...acc,
                [key]: isFunction(api.body[key])
                    ? api.body[key]({ upload })
                    : api.body[key]
            };
        }, {});
        Object.keys(upload.files).forEach((ext) => {
            payload[`${ext}_file`] = upload.files[ext];
        });
        if (api.formData) {
            const formData = new FormData();
            Object.keys(payload).forEach((key) => {
                formData.append(key, payload[key]);
            });
            return formData;
        }
        return payload;
    };

    const onUploadProgress = (uploadId) => (_progress) => {
        const percentCompleted = Math.floor((_progress.loaded * 100) / _progress.total);
        setProgress((prevFiles) => ({ ...prevFiles, [uploadId]: percentCompleted }));
    };

    return {
        loading,
        errors,
        completed,
        progress,
        cancelRequest: (uploadIds) => {
            setProgress(prevProgress => ({
                ...prevProgress,
                ...uploadIds.reduce((acc, uploadId) => ({ ...acc, [uploadId]: undefined }), {})
            }));
            uploadIds.forEach((uploadId) => sources[uploadId].cancel());
        },
        uploadRequest: (uploads) => {
            if (!loading) {
                setLoading(true);
                setErrors({});
                setProgress({});
                axios.all(uploads.map((upload) => {
                    cancelTokens[upload.id] = axios.CancelToken;
                    sources[upload.id] = cancelTokens[upload.id].source();
                    const config = {
                        onUploadProgress: onUploadProgress(upload.id),
                        cancelToken: sources[upload.id].token
                    };
                    const payload = getUploadRequestPayload(upload);
                    return axios[api.method](api.url, payload, config)
                        .then(({ data }) => ({ status: 'success', data, id: upload.id, upload }))
                        .catch((error) => {
                            if (axios.isCancel(error)) {
                                return { status: 'error', error: 'CANCELED', id: upload.id };
                            }
                            const { data } = error;
                            return { status: 'error', error: data, id: upload.id };
                        });
                }))
                    .then((responses) => {
                        const successfulUploads = responses.filter(({ status }) => status === 'success');
                        const errorUploads = responses.filter(({ status }) => status === 'error');
                        if (errorUploads.length > 0) {
                            setErrors(errorUploads.reduce((acc, errorUpload) => ({ ...acc, [errorUpload.id]: errorUpload.error }), {}));
                        }
                        if (successfulUploads.length > 0) {
                            setCompleted(successfulUploads.reduce((acc, successfulUpload) => ({ ...acc, [successfulUpload.id]: true }), {}));
                        }
                        onComplete(responses);
                    })
                    .finally(() => setLoading(false));
            }
        }
    };
};

function OperationUpload({
    api,
    blocking,
    onSelect,
    onReload,
    iconName = 'file',
    titleMsgId = "gnviewer.uploadFile",
    descriptionMsgId = 'gnviewer.dragAndDropFile'
}) {
    const [forceRequests, setForceRequests] = useState(0);
    const [loadingRequests, setLoadingRequests] = useState(false);
    const {
        progress,
        loading: uploadLoading,
        errors,
        completed,
        cancelRequest,
        uploadRequest
    } = useUpload({
        api: api.upload,
        onComplete: () => {
            setForceRequests(prevForceRequests => prevForceRequests + 1);
            if (blocking) {
                setLoadingRequests(true);
            }
        }
    });
    const {
        requests,
        deleteRequest
    } = useExecutionRequest({
        api: api.executionRequest,
        forceRequests,
        refreshTime: 3000,
        onRefresh: (_requests) => {
            if (blocking) {
                setLoadingRequests(_requests.some((request) => request.status === 'running'));
            }
        }
    });
    function handleReload() {
        requests.forEach((request) => {
            deleteRequest(request.exec_id);
        });
        onReload(forceRequests === 0);
        onSelect(undefined);
    }
    function handleClose() {
        onSelect(undefined);
    }
    const loading = uploadLoading || loadingRequests;
    return (
        <div className="gn-operation">
            <UploadPanel
                supportedFiles={api.upload.supportedFiles}
                enableRemoteFiles={api.upload.enableRemoteFiles}
                maxParallelUploads={api.upload.maxParallelUploads}
                progress={progress}
                loading={uploadLoading}
                errors={errors}
                completed={completed}
                disabled={loadingRequests}
                rightColumn={<div>
                    {blocking ? <Button
                        disabled={loading}
                        className="square-button"
                        onClick={handleReload}
                    >
                        {loading ? <Spinner /> : <Glyphicon glyph="1-close" />}
                    </Button> : <Button
                        className="square-button"
                        onClick={handleClose}
                    >
                        <Glyphicon glyph="1-close" />
                    </Button>}
                </div>}
                onCancel={cancelRequest}
                onUpload={uploadRequest}
            >
                <ExecutionRequestTable
                    iconName={iconName}
                    titleMsgId={titleMsgId}
                    descriptionMsgId={descriptionMsgId}
                    requests={requests}
                    onDelete={deleteRequest}
                    onReload={!loadingRequests && blocking ? handleReload : undefined}
                />
            </UploadPanel>
        </div>
    );
}

function Operation({
    id,
    selected,
    // resource,
    api,
    onReload,
    onSelect,
    blocking,
    iconName,
    titleMsgId,
    descriptionMsgId
}) {

    // const executions = resource?.executions;

    if (selected !== id) {
        return null;
    }
    return (
        <OperationUpload
            api={api}
            onSelect={onSelect}
            blocking={blocking}
            onReload={onReload}
            iconName={iconName}
            titleMsgId={titleMsgId}
            descriptionMsgId={descriptionMsgId}
        />
    );
}

const OperationPlugin = connect(
    createSelector([
        state => state?.operation?.selected,
        getResourceData
    ], (selected, resource) => ({
        selected,
        resource
    })),
    {
        onSelect: selectOperation,
        onReload: reloadOperation
    }
)(Operation);

function OperationButton({
    id,
    onClick
}) {
    return (
        <Button onClick={() => onClick(id)}>
            {id}
        </Button>
    );
}

const ConnectedOperationButton = connect(
    createSelector([], () => ({})),
    {
        onClick: selectOperation
    }
)(OperationButton);

export default createPlugin('Operation', {
    component: OperationPlugin,
    containers: {
        ActionNavbar: {
            Component: ConnectedOperationButton
        }
    },
    epics,
    reducers: {
        operation
    }
});
