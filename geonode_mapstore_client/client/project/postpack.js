/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const rimraf = require('rimraf');
const path = require('path');
const message = require('./utils/message');

const modulePath = path.resolve(__dirname, '..', 'module');
const packageJSONPath = path.resolve(__dirname, '..', 'package.json');

const packageJSON = require(packageJSONPath);

const name = packageJSON.name.replace('@', '').replace('/', '-');
const packageName = `${name}-${packageJSON.version}.tgz`;

if (fs.existsSync(path.join(__dirname, '..', packageName))) {
    fs.copyFileSync(path.join(__dirname, '..', packageName), path.join(modulePath, packageName));
    rimraf.sync(path.join(__dirname, '..', packageName));
}

if (fs.existsSync(path.join(modulePath, 'package.json'))) {
    fs.copyFileSync(path.join(modulePath, 'package.json'), packageJSONPath);
    rimraf.sync(path.join(modulePath, 'package.json'));
}
message.title('created package');
