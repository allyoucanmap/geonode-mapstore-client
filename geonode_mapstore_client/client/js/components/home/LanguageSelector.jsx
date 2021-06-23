/*
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Message from '@mapstore/framework/components/I18N/Message';
import { getSupportedLocales } from '@mapstore/framework/utils/LocaleUtils';
import Dropdown from '@js/components/Dropdown';
import Button from '@js/components/Button';
const LanguageSelector = forwardRef(({
    style,
    value,
    onSelect,
    inline
}, ref) => {

    const supportedLocales = getSupportedLocales();
    const supportedLocalesKeys = supportedLocales ? Object.keys(supportedLocales) : [];
    const options = supportedLocalesKeys.map(key => ({
        key,
        value: supportedLocales[key].code,
        label: supportedLocales[key].description
    }));
    const selectedKey = supportedLocalesKeys.find(key => supportedLocales[key].code === value);
    const selected = supportedLocales?.[selectedKey] || {};

    return (
        <div
            ref={ref}
            className={`gn-language-selector ${inline ? 'inline' : ''}`}
            style={style}
        >
            {inline
                ? options.map((option) => {
                    return (
                        <Button
                            active={option.value === value}
                            key={option.key}
                            variant="default"
                            onClick={() => onSelect(option.value)}
                        >
                            {option.key}
                        </Button>
                    );
                })
                : <Dropdown pullRight>
                    <Dropdown.Toggle
                        id="language-selector"
                        bsStyle="primary"
                        bsSize="sm"
                        noCaret
                    >
                        {selected.description || <Message msgId="gnhome.language" />}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {options.map((option) => {
                            return (
                                <Dropdown.Item
                                    active={option.value === value}
                                    key={option.key}
                                    onClick={() => onSelect(option.value)}
                                >
                                    {option.label}
                                </Dropdown.Item>
                            );
                        })}
                    </Dropdown.Menu>
                </Dropdown>}
        </div>
    );
});

LanguageSelector.propTypes = {
    style: PropTypes.object,
    value: PropTypes.string,
    inline: PropTypes.bool
};

LanguageSelector.defaultProps = {
    value: '',
    inline: false
};

export default LanguageSelector;
