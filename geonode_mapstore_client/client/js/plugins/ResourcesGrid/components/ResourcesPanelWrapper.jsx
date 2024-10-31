import React, { forwardRef } from 'react';

const ResourcesPanelWrapper = forwardRef(({
    top,
    bottom,
    show,
    enabled,
    children,
    className
}, ref) => {
    return enabled ? (
        <div
            className="gn-resources-panel-wrapper"
            style={{
                top: top,
                bottom: bottom,
                visibility: show ? 'visible' : 'hidden'
            }}
        >
            <div
                ref={ref}
                className={className}
            >
                {show ? children : null}
            </div>
        </div>
    ) : null;
});

export default ResourcesPanelWrapper;
