const router = require("express").Router();
const Projects = require("./projects-model");

router.get("/", (req, res, next) => {
  Projects.get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch((error) => {
      next({ message: "We ran into an error retrieving the projects" });
    });
});

router.get("/:id", (req, res, next) => {
  Projects.get(req.params.id)
    .then((project) => {
      if (project) res.status(200).json(project);
    })
    .catch((err) => next({ status: 404, message: "Project not found" }));
});

module.exports = router;
