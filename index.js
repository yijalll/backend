const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
const db = require("./config/Database");
const routerUser = require("./routes/route");
const cors = require("cors");
const routerkota = require("./routes/Kotaroute");
const routermobil = require("./routes/Mobilroute")
const routerjurusan = require("./routes/Jurusanroute")
const routepaket = require("./routes/Paketroute")
const routetransaksi = require("./routes/Transaksiroute")
const routeAuth = require("./routes/Authroute")


dotenv.config();

try {
  db.authenticate();
  console.log("database connected");
} catch (error) {
  console.error(error);
}
db.sync({force:false})

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routerUser);
app.use(routerkota);
app.use(routermobil);
app.use(routerjurusan);
app.use(routepaket);
app.use(routetransaksi);
app.use(routeAuth);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(port, () => console.log(`server running on port : ${port}`));
