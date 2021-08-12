
const testrailReporter = require('testrail-wdio-reporter')


const wdioConfig = {
    runner: 'local',
    specs: [
        './test/specs/**/*.spec.js',
    ],
    suites: {
        superuser: [
            './test/specs/**/*.spec.js',
        ],
        user: [
            './test/specs/**/*.spec.js',
        ]
    },
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 5,
    capabilities: [{
        maxInstances: 2,
        browserName: 'chrome',
        acceptInsecureCerts: true
    },
    {
        maxInstances: 2,
        browserName: 'firefox',
    }
    ],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 20000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: [
        ['chromedriver'],
        ['firefox-profile'],
        ['MicrosoftEdge']
    ],
    framework: 'mocha',

    reporters: ['spec', [testrailReporter, {
        testRailUrl: '***.testrail.io or other url',
        username: 'username',
        password: 'password or api',
        suiteId: 1
    }]],

    
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000 // 20 min
    },
    // =====
    // Hooks
    // =====
    beforeSession: function (config, capabilities) {
        if (process.env.DEBUG == "1") {
            // Giving debugger some time to connect...
            return new Promise(resolve => setTimeout(resolve, 10000));
        }
    },
    beforeSession() { // before hook works as well
        require('expect-webdriverio').setOptions({
            wait: 5000
        })
    },
    before: function (capabilities, specs) {
        browser.setTimeout({ 'pageLoad': 20000 })
    },
    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (error) {
            browser.takeScreenshot();
        }
    },
};

if (process.env.DEBUG == "1") {
    console.log("###### Running in debug mode! ######");
    wdioConfig.maxInstances = 1
    wdioConfig['execArgv'] = ["--inspect=127.0.0.1:5858"];
    wdioConfig.mochaOpts.timeout = 360000;
}

module.exports.config = wdioConfig;