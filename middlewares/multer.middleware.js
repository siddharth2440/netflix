import path from "path";
import multer, { diskStorage } from "multer";
const upload = multer({
    dest:'uploads/',
    limits:{
        fileSize:50*1024*1024
    },
    storage:diskStorage({
        destination:'uploads/',
        filename:(_req,file,cb)=>{
            cb(null,file.originalname)
        }
    }),
    // path.
    fileFilter:(_req,file,cb)=>{
        let ext = path.extname(file.originalname);
        if(ext!==".jpeg" && ext!==".jpg" && ext!==".png" && ext!==".svg"){
            console.log("UnsupportedFile extension");
            return
        }
        console.log("file is Uploaded");
        cb(null,true);
    }
})

export default upload;