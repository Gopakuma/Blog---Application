import { getFeeds, getOneFeed, adminLogin } from "./service.mjs";

export function getAllFeeds(req, res) {
  try {
    const data = getFeeds();
    return res.status(200).send(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Failed to fetch feed");
  }
}

export function getOneFeedById(req, res) {
  try {
    const data = getOneFeed(req.params);
    return res.status(200).send(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Failed to fetch feed");
  }
}

export function login(req, res) {
  try {
    const data = adminLogin(req.body);
    return res.status(200).send(data);
  } catch (e) {
    console.log(e);
    return res.status(500).send("Failed to fetch feed");
  }
}
