import { Router } from "express";
import {
  createUser,
  updateUser,
  fetchUsers,
  showUser,
} from "../Controller/UserController.js";

const router = Router();

router.get("/", fetchUsers);
router.get("/:id", showUser);
router.post("/", createUser);
router.put("/:id", updateUser);

export default router;
