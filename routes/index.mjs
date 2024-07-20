import Master from "./Master.mjs";

export default (router, validation, authenticate) => {
  new Master(router, validation, authenticate);
};
