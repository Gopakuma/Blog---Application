import { getAllFeeds, getOneFeedById, login } from "./Home/controller.mjs";
import config from "config";
const serverConfig = config.get("server");

class Master {
  constructor(router, validation, authenticate) {
    this.router = router;
    this.validation = validation;
    this.authenticate = authenticate;
    this.init();
  }
  init() {
    this.createMasterApis();
    this.createUserApis();
  }
  createMasterApis() {
    this.router.get(`${serverConfig.baseUrl}/feed`, getAllFeeds);
    this.router.get(`${serverConfig.baseUrl}/:id`, getOneFeedById);
  }
  createUserApis() {
    this.router.post(`${serverConfig.baseUrl}/login`, login);
  }
}

export default Master;
