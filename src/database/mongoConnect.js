import mongoose from "mongoose";

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB connected."))
    .catch((e) => console.log("Failed to connect to DB: " + e));
