import express from "express";

import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  likePost,
  deletePost,
  getPostsBySearch,
} from "../controllers/posts.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/search", getPostsBySearch);
router.post("/", auth, createPost);
router.patch("/:id", auth, updatePost);
router.patch("/:id/likePost", auth, likePost);
router.delete("/:id", auth, deletePost);

export default router;
