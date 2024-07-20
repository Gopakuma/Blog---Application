import express from "express";
import router from "./routes/router.mjs";
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

app.use("/", router);

app.use(express.json());
app.use(express.static("public"));

export default app;
