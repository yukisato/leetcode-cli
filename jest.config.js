module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "modulePaths": [
    "<rootDir>"
  ],
  "testMatch": [
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
}
