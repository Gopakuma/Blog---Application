import { getAllFeeds, getOneFeedById } from "./Home/controller.mjs";

class Master {
  constructor(router, validation, authenticate) {
    this.router = router;
    this.validation = validation;
    this.authenticate = authenticate;
    this.init();
  }
  init() {
    this.createMasterApis();
  }
  createMasterApis() {
    this.router.get("/", getAllFeeds);
    this.router.get("/:id", getOneFeedById);
  }
}

export default Master;
