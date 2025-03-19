const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  },
];

module.exports = routes;
