import {Router} from "express"
import { createUser } from "../Controller/UserController.js";
import { updateUser } from "../Controller/UserController.js";

const router = Router();

router.post("/", createUser)
router.put("/:id",updateUser)

export default router;