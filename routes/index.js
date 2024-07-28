import { Router } from "express";

import UserRouter from "./userRoutes";

const router = Router();

router.use("/api/user", UserRouter);

export default router;
