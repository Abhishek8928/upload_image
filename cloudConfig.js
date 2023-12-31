const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_SECRET_KEY,
    
})

console.log(process.env.CLOUD_API_KEY)
// In which folder we have to storgae the file which is upload by the user
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'upload_dev',
        allowedFormats: ['jpeg','png','jpg']
    },
});


module.exports = {storage,cloudinary}