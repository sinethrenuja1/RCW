import express from "express";
import { addPackage, getPackage,showPackages,deletePackage } from "../controllers/packageController.js";
import multer from "multer";
import path from "path";
import { __dirname } from "../dirname.js";


const app = express(); 
const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/packages");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

router.post("/addPackage", upload.single("file"), addPackage);

router.get("/getPackage", getPackage);
router.get("/showPackages", showPackages);
router.delete("/deletePackage/:package_id", deletePackage);

app.use('/public', express.static(path.join( __dirname, 'public')));

export default router;