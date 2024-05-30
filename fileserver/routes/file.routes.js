const { Router } = require("express");
const multer = require("multer");
const sharp = require("sharp");

const FileRouter = Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/");
  },
  filename: function (req, file, cb) {
    const originalName = file.originalname;
    const randomNumbers = Math.floor(100 + Math.random() * 900);
    cb(null, `${randomNumbers}-${originalName}`);
  },
});

const fileUpload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
    // return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
  },
});

FileRouter.post("/", fileUpload.array("files", 30), async function (req, res) {
  try {
    if (!req.files || req.files.length === 0) throw new Error("Aucun fichier envoyé");
    const uploadedFiles = req.files.map(file => file.filename);
    console.log(uploadedFiles);
    res.json(uploadedFiles);
  } catch (err) {
    res.status(500).send("Impossible de télécharger vos fichiers, nous y travaillons");
  }
});

module.exports = { FileRouter };