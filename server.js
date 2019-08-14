const express = require("express");
const port = 8080;
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (request, response) => {
  response.sendfile(__dirname + "/dist/index.html");
});
app.listen(port);

console.log(`Server started on port ${port}...`);
