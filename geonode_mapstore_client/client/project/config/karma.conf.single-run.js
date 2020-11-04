/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const isProject = !fs.existsSync(path.resolve(appDirectory, 'bin/geonode-mapstore-client.js'));
const geoNodeMapStorePath = path.join(__dirname, '..', '..');
const mapStorePath = path.join(appDirectory, 'node_modules', 'mapstore');
const frameworkPath = path.join(mapStorePath, 'web', 'client');
const projectConfig = require('./index.js');

const testWebpack = isProject ? 'tests-project.webpack.js' : 'tests.webpack.js';

module.exports = function karmaConfig(config) {

    const testConfig = require(path.join(mapStorePath, 'build', 'testConfig.js'))({
        files: [
            path.join(__dirname, testWebpack),
            ...(isProject ? [] : [{ pattern: './MapStore2/**/*', included: false }])
        ],
        path: [
            path.join(geoNodeMapStorePath, 'js'),
            path.join(appDirectory, 'js'),
            frameworkPath,
            // add MapStore2 path for "file:MapStore2" installation
            // to target the correct directory
            ...(isProject ? [] : [ path.join(appDirectory, 'MapStore2', 'web', 'client') ])
        ],
        basePath: appDirectory,
        testFile: path.join(__dirname, testWebpack),
        singleRun: true,
        alias: {
            '@js': path.resolve(geoNodeMapStorePath, 'js'),
            '@mapstore/framework': frameworkPath,
            ...projectConfig.extend
        }
    });

    testConfig.webpack.module.rules = [{
        test: /\.jsx?$/,
        exclude: /(__tests__|node_modules|legacy|libs\\Cesium|libs\\html2canvas)\\|(__tests__|node_modules|legacy|libs\/Cesium|libs\/html2canvas)\/|webpack\.js|utils\/(openlayers|leaflet)/,
        enforce: "post",
        use: [
            {
                loader: 'istanbul-instrumenter-loader',
                options: { esModules: true }
            }
        ]
    }, ...testConfig.webpack.module.rules];

    testConfig.webpack.resolve.modules = [
        // resolve module installed inside the MapStore2 submodule
        // it's needed for project that install MapStore dependency with
        // "file:MapStore2"
        path.join(mapStorePath, 'node_modules'),
        'node_modules'
    ];
    config.set(testConfig);
};
