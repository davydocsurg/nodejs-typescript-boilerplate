import dotenv from "dotenv";
import mongoose from "mongoose";
import { MONGO_URI } from "./constants";

dotenv.config();

// const dbURL: string | any = process.env.MONGO_DB_URL;
import { CLog } from "../helpers";

export const mongoDBConnection = async () => {
    CLog.info("connecting...");

    try {
        CLog.warn("Attempting MongoDB URI :" + MONGO_URI);
        await mongoose.connect(MONGO_URI as string);
        CLog.success(`Database connected successfully`);
    } catch (err) {
        CLog.error(err);
        CLog.error("Connection refused");
    }
};

export const mongoDBDisconnection = async () => {
    try {
        CLog.warn("Attempting to disconnect from MongoDB");
        await mongoose.disconnect();
        CLog.success(`Database disconnected successfully`);
    } catch (err) {
        CLog.error(err);
    }
};
