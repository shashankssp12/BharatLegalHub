const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./db");
const app = express();

connectDB();

const authRoute = require("./routes/auth");
const verifyRoute = require("./routes/otpverify");


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/auth", authRoute);
app.use("/api/otp", verifyRoute);


const PORT = 1000 || process.env.PORT;

app.listen(PORT, function () {
    console.log("Server is running at " + PORT);
}
);

