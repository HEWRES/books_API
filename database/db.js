import mongoose from "mongoose";

const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_CONNECTION_STRING);
        console.log("Connected to database successfully!");
    }
    catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectToDb;