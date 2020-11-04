
/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs');
const childProcess = require('child_process');
const path = require('path');

const modulePath = path.resolve(__dirname, '..', 'module');
const packageJSONPath = path.resolve(__dirname, '..', 'package.json');

const packageJSON = require(packageJSONPath);

fs.mkdirSync(modulePath, { recursive: true });
fs.copyFileSync(packageJSONPath, path.join(modulePath, 'package.json'));

const mapStoreCommit = childProcess
    .execSync('git rev-parse @:./MapStore2')
    .toString().trim();
const mapStorePackage = `git+https://github.com/geosolutions-it/MapStore2.git#${mapStoreCommit}`;

packageJSON.dependencies.mapstore = mapStorePackage;

fs.writeFileSync(packageJSONPath, JSON.stringify(packageJSON, null, 2), 'utf8');
