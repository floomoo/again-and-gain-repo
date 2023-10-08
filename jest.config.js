export default {
    // The root of your source code, typically /src
    roots: ["<rootDir>/src"],
  
    transform: {
      "^.+\\.(m?js)$": "babel-jest", // transpile mjs, js files
    },
  
    // The test environment that will be used for testing
    testEnvironment: "node",
  
    // The glob patterns Jest uses to detect test files
    testMatch: [
      "**/modules/**/*.test.js"
    ],
  
    // An array of regexp pattern strings that are matched against all
    // test paths, matched tests are skipped
    testPathIgnorePatterns: [
      "/node_modules/"
    ],
  
    // The reporter to use
    reporters: ["default"],
  
    // Indicates whether each individual test should be reported during the run
    verbose: true,
  
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: false
  };
  