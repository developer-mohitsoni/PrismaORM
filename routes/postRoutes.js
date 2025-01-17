import { Router } from "express";
import {
  createPost,
  deletePost,
  fetchPosts,
  showPost,
  updatePost,
  onlyShowPosts,
  searchPost,
} from "../Controller/PostController.js";

const router = Router();

router.get("/onlyPost", onlyShowPosts);
router.get("/", fetchPosts);
router.get("/search",searchPost)
router.get("/:id", showPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);

export default router;
