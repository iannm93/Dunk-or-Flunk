<<<<<<< HEAD
const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/appDB";

const dbOptions = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

module.exports = () => {
  return mongoose
    .connect(mongoUri, dbOptions)
    .then(() => console.log("MongoDB Connected!"))
    .catch((err) => console.error(err));
=======
const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/appDB';

const dbOptions = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true
};

module.exports = () => {
	return mongoose
		.connect(mongoUri, dbOptions)
		.then(() => console.log('MongoDB Connected!'))
		.catch((err) => console.error(err));
>>>>>>> 3235829af3db4aaa83ed056dedc8f0b5e1ba9a0d
};
