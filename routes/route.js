const express = require("express");
const router = express.Router();
const { getUsers, createUser,updateUser, deleteUser, getUser} = require("../controller/User");
const { verifyToken } = require("../middleware/VerifyToken");

router.get("/user", getUsers);
router.post("/user", createUser);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user:id", deleteUser);

module.exports = router;
