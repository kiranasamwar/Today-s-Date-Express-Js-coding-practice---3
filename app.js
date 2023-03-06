// const express = require("express");
// const app = express();

// app.get("/", (request, response) => {
//   const dateTime = new Date();
//   response.send(
//     `${dateTime.getDate()} -${
//       dateTime.getMonth() + 1
//     } -${dateTime.getFullYear()}`
//   );
// });
// // module.exports = app;
// console.log(app);

const express = require("express");
const app = express();

app.get("/", (request, response) => {
  const dateTimeYear = new Date();
  response.send(
    `${dateTimeYear.getDate()}-${
      dateTimeYear.getMonth() + 1
    }-${dateTimeYear.getFullYear()}`
  );
});
module.exports = app;
