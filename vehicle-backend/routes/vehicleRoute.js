import express from "express";
import multer from "multer";
import {
  getAllVehicle,
  postVehicle,
} from "../controllers/vehicleController.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/vehicle", postVehicle);
router.get("/vehicle", getAllVehicle);

export default router;
