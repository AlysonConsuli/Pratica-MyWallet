import { Router } from "express";
import { postFinancialEvents } from "../controllers/financialController.js";
import validateToken from "../middlewares/validateToken.js";

const financialRouter = Router();

financialRouter.post("/financial-events", validateToken, postFinancialEvents);

export default financialRouter;
