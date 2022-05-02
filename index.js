const express = require("express");
const app = express();

app.use(express.json());

const postsRouter = require("./routes/posts.routes");
app.use("/posts", postsRouter);

app.listen(4000, () => {
  console.log("Server up and running at port 4000.");
});
