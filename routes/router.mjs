import { Router } from "express";
const router = new Router();
import config from "config";
const serverConfig = config.get("server");
import { basicAuth } from "../middleware/basicAuth.mjs";

// urls
const baseUrl = serverConfig.baseUrl;
const basicBaseUrl = serverConfig.basicBaseUrl;
const secureBaseUrl = serverConfig.secureBaseUrl;

const authenticate = "";

// basic authenticate
router.use(baseUrl, basicAuth);

// authenticate
// router.use(secureBaseUrl, authenticate);

// authorize
// router.use(secureBaseUrl, validateSession());

/* Initialize All Routes Here */
const validationObject = {
  validate: "validate",
  validationRules: "validationRules",
  validateSession: "validateSession",
};
import routers from "./index.mjs";
routers(router, validationObject, basicAuth);

//exports all apis
export default router;
