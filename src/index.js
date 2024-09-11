
import dotenv from "dotenv"
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`surver is running at port:${process.env.PORT}`)
    })
})
.catch((err) => {
    console.error("MONGODB connection faild",err);
})












// const app = express();

// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.error(error)
//         throw error
//        })
//     } catch(error){
//         console.error("ERROR:", error);
//         throw error
//     }
// })()