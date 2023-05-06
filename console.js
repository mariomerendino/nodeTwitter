let repl = require("repl");
let models = require("./src/models");

Object.keys(models).forEach((modelName) => {
  global[modelName] = models[modelName];
});

let replServer = repl.start({
  prompt: "app > ",
});

replServer.context.db = models.default;
