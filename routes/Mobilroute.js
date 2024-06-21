const express = require("express");
const router = express.Router();
const {getMobil, createMobil, updateMobil, deleteMobil, getMobilById} = require ("../controller/Mobil");
const { verifyToken } = require("../middleware/VerifyToken");

router.get("/mobil",  getMobil);
router.get("/mobil/:id",  getMobilById);
router.post("/mobil", createMobil);
router.put("/mobil/:id", updateMobil);
router.delete("/mobil/:id",  deleteMobil);

module.exports = router;