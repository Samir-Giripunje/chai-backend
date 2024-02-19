import fs from "fs"

import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary= async(localFilePath)=>{
    try {
        if(!localFilePath)return null


        //upload on the cloudinary
      const response= await cloudinary.uploader.upload
       (localFilePath,{
            resource_type:"auto"
        })
        console.log("File is uploaded on cloudinary",response);
        return response;
        
    } catch (error) {
        // remove locally saved temporary file
        fs.unlink(localFilePath);
        return null
    }
}

export {uploadOnCloudinary}