
exports.seed = function(knex) {
  const projects = [
    {
      project_title:
      "do homework"
    },
    {
      project_title:
      "make dinner"
    },
  ];

  return knex("projects")
  .insert(projects)
  .then(() => console.log("Seed data for projects table added."))
};
