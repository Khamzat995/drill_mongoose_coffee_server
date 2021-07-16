const express = require("express");
const mongoose = require("mongoose");
const chalk = require("chalk");
const boxen = require("boxen");
const app = express();

const connectMongo = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://khamzat:12345@cluster0.aa1ma.mongodb.net/drinks?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    console.log(
      boxen(chalk.bold.greenBright("Успешное подключение к MongoDB"), {
        borderColor: "yellowBright",
        borderStyle: "round",
      })
    );
  } catch (e) {
    console.log(e.message);
  }
};

connectMongo();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("./routes/index"));

app.listen(3003, () => {
  console.log(
    boxen(chalk.bold.greenBright("Сервер успешно запущен!"), {
      borderColor: "yellowBright",
      borderStyle: "round",
    })
  );
});

