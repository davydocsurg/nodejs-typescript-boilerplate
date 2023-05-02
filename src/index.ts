import dotenv from "dotenv";
import app from "./app";
import { mongoDBConnection } from "./config";
import { CLog } from "./helpers";

dotenv.config();
// Uncaught Exceptions
process.on("uncaughtException", (err) => {
    CLog.error(err);
    process.exit(1);
});

mongoDBConnection();
if (!process.env.APP_PORT) {
    process.exit(1);
}
exports.APP_PORT = parseInt(process.env.APP_PORT, 10);
const server = app.listen(exports.APP_PORT, () => {
    CLog.info(`🚀 Server ready at port: ${exports.APP_PORT}`);
});
process.on("unhandledRejection", (err) => {
    CLog.error(err);
    server.close(() => {
        process.exit(1);
    });
});

export { server };
