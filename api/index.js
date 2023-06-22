const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require('cors');
const toDoRoutes = require('./routes/Todo')
dotenv.config();

mongoose.connect(process.env.MONGO_URL);

//middleware
app.use(express.json());
app.use(helmet());
app.use(cors())
app.use(morgan("dev"));

app.get('/api/v1/', (req, res) => {
  res.send("Holla");
})

app.use('/api/v1/toDo', toDoRoutes)





app.listen(8080, () => {
  console.log("Backend server is running! on http://localhost:8080/api/v1/");
});
