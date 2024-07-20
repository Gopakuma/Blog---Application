import config from "config";
const serverConfig = config.get("credentials");
import jwt from "jsonwebtoken";

export function authenticateEmailAndPassword(email, password) {
  if (serverConfig.email != email) {
    return false;
  }
  if (serverConfig.password != password) {
    return false;
  }
  return true;
}

export function generateJWTtoken(user) {
  const payload = { password: user.password, email: user.username };
  const secret = serverConfig.secret;
  const options = { expiresIn: "1h" };

  return jwt.sign(payload, secret, options);
}
