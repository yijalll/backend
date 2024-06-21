const express = require("express");
const router = express.Router();
const { getJurusan, createJurusan, updateJurusan, deleteJurusan, getJurusanById} = require("../controller/Jurusan");
const { verifyToken } = require("../middleware/VerifyToken");

router.get("/jurusan",  getJurusan);
router.get("/jurusan/:id",  getJurusanById);
router.post("/jurusan", createJurusan);
router.put("/jurusan/:id", updateJurusan);
router.delete("/jurusan/:id",deleteJurusan);

module.exports = router;