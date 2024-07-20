import jwt from "jsonwebtoken";
import config from "config";
const serverConfig = config.get("credentials");

export function basicAuth(req, res, next) {
  const token = req.headers.authorization;
  const secret = serverConfig.secret;
  try {
    const decoded = jwt.verify(token, secret);
    console.log(`Authorization successful`, decoded);
    next();
  } catch (err) {
    console.error("Token verification failed:", err);
    return res.sendStatus(403);
  }
}
