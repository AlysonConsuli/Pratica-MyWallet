import { Router } from "express";

import authRouter from "./authRouter.js";
import financialRouter from "./financialRounter.js";

const router = Router();

router.use(authRouter);
router.use(financialRouter);

export default router;
