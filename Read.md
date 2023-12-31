# Image Upload Guide 📸

## Overview

1. Generally in any platform we are not taking any link addresses inside the input;
   - upload is the best way to do it (document upload) 🚀

2. linkedin part -> if we wanted to post a video inside the LinkedIn platform, LinkedIn allows us to upload the video. 🎥

3. form -> does not send the file (photo) at the backend
   - form -> can only send the raw data 📤

4. form -> can only send the raw data 📤

5. Mongodb -> data store in the form of BJSON (individual data item size limit associated)
   - Mongodb -> data store in the form of BJSON (individual data item size limit associated) 📊

6. problem -> 1. send file
   - problem -> 2. size limit 🚧

7. how we will do

8. we are making our form capable of sending the file to the backend 🔄

9. we use third-party services (Microsoft Azure, AWS, Cloudinary)
   - cloud -> different rented computer we will store our file on that
   - for doing this we will use the free services only for development purposes
   - tps -> to save our file inside the cloud ☁️

10. tcp -> URL (or) link 🔗

11. To save the link inside MongoDB 💾

12. urlencodeddata -> the data is encoding by URL encode is also known as percent encoding
   - the data which is sent inside the URL which is unsafe is replaced by percent-encoded-value 🔄

13. for parsing multipart form data, we will use multer

14. Multer -> 1. Node.js middleware for handling multipart/form-data
   - Multer -> 2. Multer will not process any other form which is not multipart(only multipart)
   - Multer -> 3. It is primarily used for uploading a file 📁

15. Multipart/form-data means the binary as the text data together 📄

## step to use the multer
-> npm i multer (to install the multer)
-> require the multer
-> use the multer function with parameter of the object {dest:"file location where to saved} -- used for intilization of multer
-> after initilization of the multer you will get the single method inisde it pass the field of your form
-> multer we add one more object inside the req that is req.file (which contains all the information about the 📂)


## how to store that file inside the cloud

we needed two package -> npm i cloudinary multer-storage-clodinary
1st package is used for ( to integrate node and clodinary connection)

require both package with the help of the above code

## code example

// require both file
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// configuration between node app and cloudinary

cloudinary.config({
    cloud_name: 'your cloud name',
    api_key: 'your cloud api key,
    api_secret: 'your cloud sceret key ',
})
// In which folder we have to storgae the file which is upload by the user
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'upload_dev',
        allowedFormatS: ['jpeg','png','jpg']
    },
});

module.exports = {storage,cloudinary}


## multer we store the file inside the cloudinary with respected destination path
const Upload = multer({storage}) 


form(file -> data send to backend)
   ⬇️
backend (parse)
   ⬇️
cloud(store)
   ⬇️
url link
   ⬇️
store in mongob (url)

