import { v2 as cloudinary} from "cloudinary";
import fs from "fs";


cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        //upload the file in cloudinary
        const responce = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        });
        //file hasbeen uploaded on clodinary
        console.log("file is uploaded on cloudinary", responce.url);
        return responce;
    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally save teporary file path uploaded operation got faild
        return null
    }
}

