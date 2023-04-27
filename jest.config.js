module.exports = {
    displayName: "node-typescript-boilerplate",
    testMatch: ["./**.test.ts"],
    testTimeout: 20000,
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "json"],
    coverageDirectory: "../../coverage/apps/functions",
    setupFilesAfterEnv: ["./src/__tests__/shared/script.ts"],
};
