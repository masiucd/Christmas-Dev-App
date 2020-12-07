module.exports = {
  roots: ["<rootDir>"],
  clearMocks: true,
  coverageDirectory: ".coverage",
  moduleFileExtensions: ["ts", "tsx", "js", "json", "jsx"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  testRegex: "(/__tests__/.*(test|spec))\\.([tj]sx?)$",
  transform: {
    "^.+\\.(ts|tsx|js)$": "babel-jest",
  },
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "^@/components(.*)$": "<rootDir>/components$1",
    "^@styles/(.*)": "<rootDir>/styles$1",
    "^@hooks/(.*)": "<rootDir>/hooks$1",
  },
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ["./jest.setup.js"],
}
