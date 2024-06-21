const express = require("express");
const router = express.Router();
const{getTransaksi, createTransaksi, updateTransaksi, deleteTransaksi, getTransaksiById} = require ("../controller/Transaksi");
const { verifyToken } = require("../middleware/VerifyToken");

router.get("/transaksi", verifyToken, getTransaksi);
router.get("/transaksi/:id",verifyToken, getTransaksiById);
router.post("/transaksi", createTransaksi);
router.put("/transaksi/:id", verifyToken, updateTransaksi);
router.delete("/transaksi/:id",verifyToken, deleteTransaksi);


module.exports = router;