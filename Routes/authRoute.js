const express = require("express");
const {
  createUser,
  getAllUser,
  LoginUser,
  getAUser,
  updateUser,
  deleteUser,
  blockUser,
  unblockUser
} = require("../Controllers/userCtrl.js");

const {authMiddleware,isAdmin} = require("../Middlewares/authMiddleare");
const router = express.Router();
router.post("/register", createUser);
router.get("/all", getAllUser);
router.post("/log", LoginUser);
router.get("/:id",authMiddleware,isAdmin,getAUser);
router.put("/edit-user", authMiddleware,updateUser);
router.put("/block-user/:id", authMiddleware,isAdmin,blockUser);
router.put("/unblock-user/:id", authMiddleware,isAdmin,unblockUser);
router.delete("/:id", deleteUser);

module.exports = router;