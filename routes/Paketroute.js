const express = require("express");
const router = express.Router();
const { getPaket, createPaket, updatePaket, deletePaket, getPaketById } = require("../controller/Paket");
const { verifyToken } = require("../middleware/VerifyToken");

router.get("/paket", verifyToken, getPaket);
router.get("/paket/:id", verifyToken, getPaketById);
router.post("/paket", createPaket);
router.put("/paket/:id", verifyToken, updatePaket);
router.delete("/paket/:id", verifyToken, deletePaket);

module.exports = router;