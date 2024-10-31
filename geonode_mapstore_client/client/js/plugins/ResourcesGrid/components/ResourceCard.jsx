/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef, useState, useRef } from 'react';
import Message from '@mapstore/framework/components/I18N/Message';
import FaIcon from './FaIcon';
import Button from './Button';
import Spinner from './Spinner';
import ResourceStatus from './ResourceStatus';
import ALink from './ALink';
import AuthorInfo from './AuthorInfo';
import ActionButtons from './ActionButtons';

const ResourceCard = forwardRef(({
    data,
    active,
    options,
    layoutCardsStyle,
    readOnly,
    className,
    loading,
    onClick,
    downloading,
    statusItems,
    registry
}, ref) => {

    const {
        formatHref,
        getResourceTypesInfo
    } = registry;

    const abstractRef = useRef();
    const resource = data;
    const types = getResourceTypesInfo();
    const {
        icon,
        formatViewerUrl
    } = types[resource?.subtype] || types[resource?.resource_type] || {};
    const viewerUrl = resource?.pk && formatViewerUrl(resource);

    const [imgError, setImgError] = useState(false);

    function handleClick() {
        if (onClick) {
            onClick(data);
        }
    }
    const isCardLayoutList = layoutCardsStyle === 'list';
    const imgClassName = isCardLayoutList ? 'card-img-left' : 'card-img-top';

    const renderEllipsis = () => {
        const isOverflowing = isCardLayoutList && abstractRef?.current?.clientHeight < abstractRef?.current?.scrollHeight;
        return isOverflowing ? <span className="ellipsis">...</span> : null;
    };

    return (
        <div
            ref={ref}
            onClick={handleClick}
            className={[
                'gn-resource-card',
                `gn-card-type-${layoutCardsStyle}`,
                active ? 'active' : '',
                readOnly ? 'read-only' : '',
                className ? ` ${className}` : ''
            ].join(' ')}
        >
            {(!readOnly && !onClick && viewerUrl) ? (
                <a
                    className="gn-resource-card-link"
                    href={viewerUrl}
                />
            ) : null}
            {!readOnly &&
                options &&
                options.length > 0 &&
                !isCardLayoutList && (
                <ActionButtons
                    resource={resource}
                    options={options}
                    readOnly={readOnly}
                />
            )}
            <div className={`card-resource-${layoutCardsStyle}`}>
                {(imgError || !resource.thumbnail_url) ? (
                    <div className={`${imgClassName} card-img-placeholder`}>
                        <FaIcon name={icon} />
                    </div>
                ) : (
                    <img
                        className={imgClassName}
                        src={resource.thumbnail_url}
                        onError={() => setImgError(true)}
                    />
                )}
                <div className="gn-resource-card-body-wrapper">
                    <div className="card-body">
                        <div className="card-title">
                            <div className="card-title-content">
                                {(icon && !loading && !downloading) && (
                                    <>
                                        <ALink
                                            readOnly={readOnly}
                                            href={formatHref({
                                                query: {
                                                    'f': resource.resource_type
                                                }
                                            })}
                                        >
                                            <FaIcon name={icon} />
                                        </ALink>
                                    </>
                                )}
                                {(loading || downloading) && <Spinner />}
                                <span className="gn-card-title">
                                    {resource.title}
                                </span>
                            </div>
                            <ResourceStatus statusItems={statusItems} />
                        </div>
                        <p ref={abstractRef} className={`card-text gn-card-description ${layoutCardsStyle}`}>
                            {resource.raw_abstract ? resource.raw_abstract : '...'}
                        </p>
                        {renderEllipsis()}
                        {!readOnly &&
                            options &&
                            options.length > 0 &&
                            isCardLayoutList && (
                            <ActionButtons
                                resource={resource}
                                options={options}
                                readOnly={readOnly}
                            />
                        )}
                    </div>
                    <div className="gn-footer-wrapper">
                        <div
                            className="gn-card-footer"
                            style={{
                                padding:
                                    options && options.length === 0
                                        ? '0 0.25rem 0 0.5rem'
                                        : '0 0.5rem'
                            }}
                        >
                            <p className="card-text gn-card-user">
                                <AuthorInfo
                                    resource={resource}
                                    readOnly={readOnly}
                                    registry={registry}
                                />
                            </p>
                            <div className="gn-card-actions">
                                {!readOnly && viewerUrl ? (
                                    <div
                                        className={`${
                                            options && options.length === 0
                                                ? 'gn-card-view-editor-right'
                                                : 'gn-card-view-editor'
                                        }`}
                                    >
                                        <Button
                                            variant="primary"
                                            href={viewerUrl}
                                            rel="noopener noreferrer"
                                        >
                                            <Message msgId={`gnhome.view`} />
                                        </Button>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

ResourceCard.defaultProps = {
    links: [],
    theme: 'light',
    formatHref: () => '#',
    featured: false
};

export default ResourceCard;
