import { data } from "../../data/data.mjs";
import { authenticateEmailAndPassword } from "../../utils/util.mjs";
import { generateJWTtoken } from "../../utils/util.mjs";

export function getFeeds() {
  return data;
}

export function getOneFeed(params) {
  const { id } = params;
  const response = data.filter((item) => item.id == id);
  return response;
}

export function adminLogin(body) {
  const { email, password } = body;

  const authenticate = authenticateEmailAndPassword(email, password);

  if (!authenticate) {
    const response = "Incorrect Email or Password";
    return response;
  }

  const user = { email, password };
  const jwt = generateJWTtoken(user);

  const response = { jwt };
  return response;
}
