require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

// express app
const app = express();

// middleware
mongoose.set("strictQuery", false);
app.use(express.json());
app.use(cors());
// connect  db
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        console.log("the database is connected");
    })
    .catch((error) => {
        console.log(error);
    });

// routes
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
