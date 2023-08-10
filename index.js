const mongoose = require("mongoose");
const express = require("express");
const bodyparser = require("body-parser");
const app = express();

const customerRoutes = require("./routes/customer");
const PORT = 3001;
mongoose
  .connect(
    "mongodb+srv://poojanpatel3645:76jjntWtwGyqYWDq@cluster0.q6s5m40.mongodb.net/shop?authSource=admin&replicaSet=atlas-mn9dmy-shard-0&readPreference=primary&retryWrites=true&ssl=true",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    {}
  )
  .then(() => console.log("console connected...."))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/", customerRoutes);

app.listen(PORT, () => console.log(`server on port: ${PORT}`));
