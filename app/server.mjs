import express from "express";
import router from "../routes/router.mjs";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));
app.use("/", router);

app.listen(port, () => {
  console.log(`Server Started at ${port}`);
});

export default app;
