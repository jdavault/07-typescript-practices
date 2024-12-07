module.exports = {
  // Use ts-jest preset for testing TypeScript files with Jest
  preset: "ts-jest",

  // Set the test environment (default is "node")
  testEnvironment: "node",

  // Set the root directory for your tests and modules
  roots: ["<rootDir>/src"],

  // Use ts-jest to transform TypeScript files
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },

  // Match test files (e.g., *.test.js or *.spec.ts)
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // Coverage options
  // collectCoverage: true,
  // collectCoverageFrom: ['src/**/*.{ts,tsx}', '!src/**/*.d.ts'],
  // coverageDirectory: 'coverage',

  // Coverage thresholds (optional)
  // coverageThreshold: {
  //   global: {
  //     branches: 80,
  //     functions: 80,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
};
