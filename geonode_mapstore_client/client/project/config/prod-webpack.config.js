/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const path = require('path');
const DefinePlugin = require('webpack/lib/DefinePlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const fs = require('fs');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const appDirectory = fs.realpathSync(process.cwd());
const isProject = !fs.existsSync(path.resolve(appDirectory, 'bin/geonode-mapstore-client.js'));
const geoNodeMapStorePath = path.join(__dirname, '..', '..');
const mapStorePath = path.join(appDirectory, 'node_modules', 'mapstore');
const frameworkPath = path.join(mapStorePath, 'web', 'client');

const extractThemesPlugin = require(path.resolve(mapStorePath, './build/themes.js')).extractThemesPlugin;
const buildConfig = require(path.resolve(mapStorePath, './build/buildConfig.js'));

const projectConfig = require('./index.js');

const version = projectConfig.version;

const staticPath = projectConfig.staticPath || '../static/mapstore';
const distPath = projectConfig.distPath || '../static/mapstore/dist';
const publicPath = projectConfig.publicPath || '/static/mapstore/dist/';

module.exports = () => {

    const mapStoreConfig = buildConfig(
        {},
        {},
        {
            base: appDirectory,
            dist: path.join(appDirectory, distPath),
            framework: frameworkPath,
            code: [
                path.join(geoNodeMapStorePath, 'js'),
                path.join(appDirectory, 'js'),
                frameworkPath,
                // add MapStore2 path for "file:MapStore2" installation
                // to target the correct directory
                ...(isProject ? [] : [ path.join(appDirectory, 'MapStore2', 'web', 'client') ])
            ]
        },
        extractThemesPlugin,
        true,
        publicPath,
        '.msgapi',
        [
            new DefinePlugin({
                '__GEONODE_PROJECT_CONFIG__': JSON.stringify({
                    version,
                    translationsPath: Object.keys(projectConfig.translations)
                })
            }),

            // new BundleAnalyzerPlugin(),

            new CopyWebpackPlugin([
                ...(isProject
                    ? []
                    : [
                        {
                            from: path.resolve(appDirectory, 'module'),
                            to: path.resolve(staticPath, 'module')
                        }
                    ]),
                ...Object.keys(projectConfig.translations).map((key) => ({
                    from: projectConfig.translations[key][0],
                    to: path.resolve(appDirectory, staticPath + '/' + projectConfig.translations[key][1])
                })),
                {
                    from: path.resolve(appDirectory, 'version.txt'),
                    to: path.resolve(appDirectory, staticPath)
                }
            ])
        ],
        {
            '@js': path.resolve(geoNodeMapStorePath, 'js'),
            '@mapstore/framework': frameworkPath,
            ...projectConfig.extend
        }
    );

    return {
        ...mapStoreConfig,
        entry: {
            'ms2-geonode-api': path.join(geoNodeMapStorePath, 'js', 'api'),
            ...(projectConfig.apps || []).reduce((acc, name) => ({
                ...acc,
                [name]: path.join(appDirectory, 'js', 'apps', name)
            }), {}),
            'themes/default': path.join(geoNodeMapStorePath, 'themes', 'default', 'theme.less'),
            'themes/preview': path.join(geoNodeMapStorePath, 'themes', 'preview', 'theme.less'),
            ...(projectConfig.themes || []).reduce((acc, name) => ({
                ...acc,
                ['themes/' + name]: path.join(appDirectory, 'themes', name, 'theme.less')
            }), {})
        },
        resolve: {
            ...mapStoreConfig.resolve,
            modules: [
                // resolve module installed inside the MapStore2 submodule
                // it's needed for project that install MapStore dependency with
                // "file:MapStore2"
                path.join(mapStorePath, 'node_modules'),
                'node_modules'
            ]
        }
    };
};
