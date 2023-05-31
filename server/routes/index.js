import express from "express";
import { getUserDetails } from "../controllers/loginController";
import { getPatientSearchResults } from "../controllers/patientSearchController";

const router = express.Router();

router.post("/login", getUserDetails);

router.post("/patientSearch", getPatientSearchResults);

module.exports.router = router;
