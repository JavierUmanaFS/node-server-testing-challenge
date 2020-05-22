const express = require("express");

const Projects = require("../projects/projectsModel.js");


const server = express();

server.use(express.json());


server.get("/", (req, res) => {
  res.status(200).json({ api: "IS UP" });
});

server.get("/projects", (req, res) => {
  Projects.getAll()
  .then(projects => {
    res.status(200).json({ data: projects })
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

server.post("/projects", (req, res) =>{
  const newProject = req.body;
  Projects.insert(newProject)
  .then(project => {
    res.status(201).json({ newProject: project})
  })
  .catch(error => {
    res.status(500).json({ errorMessage: error.message})
  })
})

server.delete("/project/:id", (req, res) =>{

  Projects.remove(req.params.id)
  .then(() => {
    res.status(200).json({ message: "project has been deleted"})
  })
  .catch(error => {
    res.status(500).json({ errorMessage: error.message})
  })
})

module.exports = server;