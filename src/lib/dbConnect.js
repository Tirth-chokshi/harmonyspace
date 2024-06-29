import mongoose from "mongoose"

const DB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('DB connection success')
    } catch (error) {
        console.log("MONGO URI Error: ", error)      
    }
}
export default DB 