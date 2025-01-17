import { Router } from "express";
import {
  fetchComment,
  showComment,
  createComment,
  updateComment,
  deleteComment,
  onlyShowComment,
} from "../Controller/CommentController.js";

const router = Router();

router.get("/onlyComment", onlyShowComment);
router.get("/", fetchComment);
router.get("/:id", showComment);
router.post("/", createComment);
router.put("/:id", updateComment);
router.delete("/:id", deleteComment);

export default router;
