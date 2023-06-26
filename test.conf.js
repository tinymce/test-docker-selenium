exports.config = {
  runner: 'local',
  // Server configurations
  hostname: 'localhost',
  port: 4445,
  path: '/',
  // Test files
  specs: [
    './test/specs/**/*.js'
  ],
  // Patterns to exclude.
  exclude: [
      // 'path/to/excluded/files'
  ],
  maxInstances: 10,

  logLevel: 'info',
  bail: 0,
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
  baseUrl: 'http://localhost:4445',
  // Default timeout for waitFor* commands
  waitforTimeout: 10000,
  // Default timeout in miliseconds for request to browser driver or grid
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  // Test runner services
  // Install adapters for the specified services
  services: [
    ['selenium-standalone', {
      args: {
        seleniumArgs: ['--host', '127.0.0.1']
      }
    }]
  ],
  capabilities: [{
    browserName: 'chrome',
    port: 4445
      // capabilities for local browser web tests
      // browserName: 'chrome' // or "firefox", "microsoftedge", "safari"
  }, {
    browserName: 'firefox',
    port: 4446
  }],
  // Testing frameworks
  // Install wdio adapters for the pack used
  framework: 'mocha',
  // Test reporters for stdout
  reporters: ['spec'],
  // Opts passed into mocha
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
},
};