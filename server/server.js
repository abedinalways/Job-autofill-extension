const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());

//!database connection with mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('mongodb connection successfully'))
.catch((error)=>console.log(error))

//router setup

app.listen(PORT, () => {
  console.log(`Autofill app listening on port ${PORT}`);
});
