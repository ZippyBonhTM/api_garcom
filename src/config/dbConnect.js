import mongoose from "mongoose";

function ConnectToDB () {
    mongoose.connect(process.env.DB_URI_CONNECTION);
    return mongoose.connection;
}

export default ConnectToDB;
