const hooks = require( './config/hooks.conf')
const base = require( './config/base.conf')

exports.config = {
    host: 'localhost',
    port: 4445,
    path: '/wd/hub',

    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'firefox'
        },
    ],

    ...base,
    ...hooks
}
