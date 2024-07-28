import { Router } from "express";
import {
  createUser,
  updateUser,
  fetchUsers,
  showUser,
  deleteUser,
  onlyFetchUser,
} from "../Controller/UserController.js";

const router = Router();

router.get("/fetch", onlyFetchUser);
router.get("/", fetchUsers);
router.get("/:id", showUser);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
