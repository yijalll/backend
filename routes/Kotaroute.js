const express = require("express");
const router = express.Router();
const {getKota, createKota,updateKota, deleteKota, getKotaById } = require ("../controller/Kota");
const { verifyToken } = require("../middleware/VerifyToken");

router.get("/kota",  getKota);
router.get("/kota/:id",  getKotaById);
router.post("/kota", createKota);
router.put("/kota/:id",  updateKota);
router.delete("/kota/:id",  deleteKota);


module.exports = router;