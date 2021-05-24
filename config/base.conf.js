module.exports = {

    logLevel: 'info',
    bail: 0,

    specs: [
        './test/specs/**/*.js',
    ],
    exclude: [
        //'./test/specs/navigation.spec.js'
    ],

    waitforTimeout: 10000,
    connectionRetryTimeout: 30000,
    connectionRetryCount: 1,

    baseUrl: 'https://localcoding.us',

    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true
    }]],
    mochaOpts: {
        require: ['@babel/register'],
        ui: 'bdd',
        timeout: 60000
    }
}
