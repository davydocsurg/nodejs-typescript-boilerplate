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
