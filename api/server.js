const express = require("express");

// const Projects = require("../projects/projectsModel.js");

// const projectsRouter = require("../projects/projects-router.js");

const server = express();

server.use(express.json());

// server.use('/api/projects', projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: "IS UP" });
});

// server.get("/projects", (req, res) => {
//   Projects.getAll()
//   .then(projects => {
//     res.status(200).json({ data: projects })
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

module.exports = server;