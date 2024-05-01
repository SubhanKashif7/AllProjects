import mongoose from "mongoose";

const connectDatabase = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.DB_URI}/${process.env.DB_NAME}`);
        return connectionInstance;
    }catch(e){
        console.log("MONGO DB CONNECTION ERROR OCCURED");
        throw new Error(`MONGO DB CONNECTION ERR ${e}`);
    }
};
export default connectDatabase;