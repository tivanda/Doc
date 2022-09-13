import express from "express";
import {
  createPost,
  getPost,
  likePost,
  getTimelinePosts,
  updatePost,
  createComment,
  deleteComment,
  deletePost,
} from "../Controllers/PostController.js";
const router = express.Router();

router.post("/", createPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);
router.post("/:id/:userId/comment", createComment);
router.delete("/:id/:userId", deleteComment);
router.delete("/:id", deletePost);

export default router;
