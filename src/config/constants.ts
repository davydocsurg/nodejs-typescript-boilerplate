import dotenv from "dotenv";
dotenv.config();

const Environment = {
    BUILD: "build",
    PRODUCTION: "production",
    DEVELOPMENT: "development",
    TEST: "test",
};

const isTest = (process.env.NODE_ENV as string) === Environment.TEST;
const isDevelopment = process.env.NODE_ENV === Environment.DEVELOPMENT;
const isProduction = process.env.NODE_ENV === Environment.PRODUCTION;
const PORT = 8080;
const API_ROUTE = isProduction ? "" : `http://localhost:${PORT}/api`;

const DB_NAME = process.env.DB_NAME || "ntb";
const FALLBACK_MONGO_PORT = "27018";
const FIRST_REPLICA_SET_PORT = "2717";
const SECOND_REPLICA_SET_PORT = "2727";
const THIRD_REPLICA_SET_PORT = "2737";

const TEST_DB_NAME = "test_ntb";

// will fallback to using the test_ntb database if it's running inside Docker container,
const isTestingEnvironment =
    isTest ||
    (process.env.CONTAINER_HOST === "mongodb" &&
        !isDevelopment &&
        !isProduction);

const MONGO_HOST = process.env.CONTAINER_HOST || "127.0.0.1";
const REPLICA_SET_MONGO_ROOT =
    `mongodb://${MONGO_HOST}:${FIRST_REPLICA_SET_PORT},` +
    `${MONGO_HOST}:${SECOND_REPLICA_SET_PORT},` +
    `${MONGO_HOST}:${THIRD_REPLICA_SET_PORT}`;
const FALLBACK_MONGO_ROOT = `mongodb://${MONGO_HOST}:${FALLBACK_MONGO_PORT}`;
const TEST_MONGO_URI = `${FALLBACK_MONGO_ROOT}/${TEST_DB_NAME}`;
const LOCAL_MONGO_URI = `${FALLBACK_MONGO_ROOT}/${DB_NAME}`;
const MONGO_URI = isTestingEnvironment
    ? TEST_MONGO_URI
    : isDevelopment
    ? LOCAL_MONGO_URI
    : LOCAL_MONGO_URI;

export {
    API_ROUTE,
    Environment,
    DB_NAME,
    FALLBACK_MONGO_PORT,
    FALLBACK_MONGO_ROOT,
    FIRST_REPLICA_SET_PORT,
    LOCAL_MONGO_URI,
    MONGO_HOST,
    MONGO_URI,
    PORT,
    REPLICA_SET_MONGO_ROOT,
    SECOND_REPLICA_SET_PORT,
    TEST_DB_NAME,
    TEST_MONGO_URI,
    THIRD_REPLICA_SET_PORT,
    isDevelopment,
    isProduction,
    isTest,
    isTestingEnvironment,
};
