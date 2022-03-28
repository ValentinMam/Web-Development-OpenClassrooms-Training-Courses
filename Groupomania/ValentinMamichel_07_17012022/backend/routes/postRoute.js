const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const postCtrl = require("../controllers/postCtrl");

router.post("/", auth, multer, postCtrl.createPost);
router.get("/", auth, postCtrl.getAllPosts);
router.get("/:id", auth, postCtrl.getOnePost);
router.put("/:id", auth, multer, postCtrl.modifyPost);
router.put("/:id/image", auth, multer, postCtrl.deleteImage);
router.delete("/:id", auth, postCtrl.deletePost);
router.post("/:id/like", auth, postCtrl.sendLike);
router.get("/:id/like", auth, postCtrl.getAllLikes);

module.exports = router;
