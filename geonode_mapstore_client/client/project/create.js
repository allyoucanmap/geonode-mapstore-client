/**
 * Copyright 2020, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the ISC-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

const fs = require('fs-extra');
const path = require('path');
const childProcess = require('child_process');
const readline = require('readline-promise').default;
const message = require('./utils/message');

const appDirectory = fs.realpathSync(process.cwd());
const geoNodeMapStoreClientPackageJSON = require(path.resolve(__dirname, '..', 'package.json'));

const gitignoreBody = `
debug.log
node_modules/
web/
dist/
module/
coverage/
package-lock.json
`;

function readParam(rl, params, result) {
    return new Promise((resolve, reject) => {
        if (params.length === 0) {
            resolve(result);
        } else {
            const [param, ...other] = params;
            rl.questionAsync(param.label).then((answer) => {
                result[param.name] = answer || param.default;
                if (param.validate(result[param.name])) {
                    resolve(readParam(rl, other, result));
                } else {
                    reject(new Error(`the ${param.name}: ${answer} is not valid`));
                }
            });
        }
    });
}

function readParams(paramsDesc) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return readParam(rl, paramsDesc, {});
}

function create(params) {
    const clientFolder = path.resolve(appDirectory, params.location);
    if (!fs.existsSync(clientFolder)) {
        fs.mkdirSync(clientFolder);
    }
    const isVersion = fs.existsSync(path.resolve(clientFolder, 'version.txt'));
    const packageJSONPath = path.resolve(clientFolder, 'package.json');
    const packageJSON = fs.existsSync(packageJSONPath) ? require(packageJSONPath) : {};

    const newPackageJSON = {
        ...packageJSON,
        'name': params.name || packageJSON.name || 'geonode-mapstore-client-project',
        'version': params.version || packageJSON.version || '1.0.0',
        'description': params.description || packageJSON.description || 'extend geonode mapstore client',
        'eslintConfig': {
            'extends': [
                '@mapstore/eslint-config-mapstore'
            ],
            'parserOptions': {
                'babelOptions': {
                    'configFile': './node_modules/mapstore/build/babel.config.js'
                }
            },
            'globals': {
                '__GEONODE_PROJECT_CONFIG__': false
            }
        },
        'scripts': {
            ...packageJSON.scripts,
            'compile': 'geonode-mapstore-client compile',
            'start': 'geonode-mapstore-client start',
            'test': 'geonode-mapstore-client test',
            'update-project': 'geonode-mapstore-client update'
        },
        'devDependencies': {
            ...packageJSON.devDependencies,
            ...geoNodeMapStoreClientPackageJSON.devDependencies
        },
        'dependencies': {
            ...packageJSON.dependencies,
            ...geoNodeMapStoreClientPackageJSON.dependencies,
            'geonode-mapstore-client': params.lib
        },
        'geonode': {
            ...packageJSON.geonode,
            'devServer': {
                'host': 'localhost:8000',
                'protocol': 'http'
            }
        }
    };

    fs.writeFileSync(packageJSONPath, JSON.stringify(newPackageJSON, null, 2));

    if (!isVersion) {
        fs.writeFileSync(path.resolve(clientFolder, 'version.txt'), `${newPackageJSON.name}-v${newPackageJSON.version}`);
    }

    fs.writeFileSync(path.resolve(clientFolder, '.gitignore'), gitignoreBody);

    const copyFiles = [
        ['project/templates', '.']
    ];

    copyFiles.forEach((file) => {
        fs.copySync(path.resolve(__dirname, '..', file[0]), path.resolve(clientFolder, file[1]));
    });
}

const isProject = !fs.existsSync(path.resolve(appDirectory, 'bin/geonode-mapstore-client.js'));

if (isProject) {

    message.title('create project');

    const paramsDesc = [
        {
            'label': '  - Location of client folder (default ./client): ',
            'name': 'location',
            'default': './client',
            'validate': () => true
        },
        {
            'label': '  - Absolute path of geonode-mapstore-client-{version}.tgz: ',
            'name': 'lib',
            'default': '',
            'validate': (value) => !!value
        }
    ];

    readParams(paramsDesc)
        .then((params) => {
            create(params);
            message.success('create project - success');
            message.title('npm install');
            const clientFolder = path.resolve(appDirectory, params.location);
            childProcess
                .execSync(
                    'npm install',
                    {
                        stdio: 'inherit',
                        cwd: clientFolder
                    }
                );
            process.exit();
        })
        .catch((e) => {
            message.error('create project - error');
            throw new Error(e.message);
        });
}
