import { data } from "../../data/data.mjs";

export function getFeeds() {
  return data;
}

export function getOneFeed(params) {
  const { id } = params;
  const response = data.filter((item) => item.id == id);
  return response;
}
