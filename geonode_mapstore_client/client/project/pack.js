/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const childProcess = require('child_process');
const path = require('path');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const argv = yargs(hideBin(process.argv)).argv;

const prePackPath = path.join(__dirname, 'prepack.js');
childProcess
    .execSync(
        `node ${prePackPath}`,
        { stdio: 'inherit' }
    );

childProcess
    .execSync(
        argv.mode === 'publish'
            ? 'npm publish --access public'
            : 'npm pack',
        { stdio: 'inherit' }
    );

const postPackPath = path.join(__dirname, 'postpack.js');
childProcess
    .execSync(
        `node ${postPackPath}`,
        { stdio: 'inherit' }
    );
