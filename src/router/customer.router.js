import { Router } from "express";
import { renderCustomers, createCustomers} from "../controllers/customerController.js";
import express from "express";
const router = express.Router();

router.get("/", renderCustomers); // Llama al controlador cuando accedes a la ruta raíz

export default router;