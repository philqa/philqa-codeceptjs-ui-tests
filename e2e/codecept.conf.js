exports.config = {
    tests: './src/specs/*.spec.ts',
    timeout: 30000,
    output: '../reports',
    helpers: {
        Puppeteer: {
            url: 'https://phil.qa',
            show: false,
            waitForTimeout: 5000
        }
    },
    plugins: {},
    mocha: {
        reporterOptions: {
            'codeceptjs-cli-reporter': {
                stdout: '-',
                options: {
                    verbose: false,
                    steps: true
                }
            },
            'mocha-junit-reporter': {
                stdout: './reports/junit-console.log',
                options: {
                    mochaFile: './reports/result.xml'
                }
            },
            'mochawesome': {
                stdout: './reports/console.log',
                options: {
                    reportDir: './reports',
                    reportFilename: 'mochawesome'
                }
            }
        }
    },
    require: [
        'ts-node/register'
    ],
    bootstrap: false,
    hooks: [],
    name: 'philqa-codeceptjs-ui-tests'
};