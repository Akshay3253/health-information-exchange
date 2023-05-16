import express from "express";
import { getUserDetails } from "../controllers/loginController";

const router = express.Router();

router.post("/login", getUserDetails);

module.exports.router = router;
