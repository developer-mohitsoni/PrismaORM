import { Router } from "express";
import {
  createUser,
  updateUser,
  fetchUsers,
} from "../Controller/UserController.js";

const router = Router();

router.get("/", fetchUsers)
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
