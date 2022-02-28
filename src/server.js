//https://www.npmjs.com/package/venom-bot

const express = require("express");
const venom = require("venom-bot");
require("dotenv/config");

const app = express();
const port = 3000;

venom
  .create({ headless: true })
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  app.get("/", (req, res) => {
    client
      .sendText(
        `${process.env.NUMBER_CEL_RECEIVE_MESSAGE}@c.us`,
        "👋 Hello from venom!"
      )
      .then((result) => {
        console.log("Result: ", result); //return object success
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });
    res.send("Hello World!");
  });

  app.get("/file", (req, res) => {
    client
      .sendFile(
        `${process.env.NUMBER_CEL_RECEIVE_MESSAGE}@c.us`,
        "src/assets/file/declaração-erick.pdf",
        "file_name",
        "See my file in pdf"
      )
      .then((result) => {
        console.log("Result: ", result); //return object success
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });
    res.send("File");
  });

  app.get("/image", (req, res) => {
    client
      .sendImage(
        `${process.env.NUMBER_CEL_RECEIVE_MESSAGE}@c.us`,
        "src/assets/img/visão-do-cachorro-2.jpeg",
        "image-name",
        "image name"
      )
      .then((result) => {
        console.log("Result: ", result); //return object success
      })
      .catch((erro) => {
        console.error("Error when sending: ", erro); //return object error
      });
    res.send("Image");
  });
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
