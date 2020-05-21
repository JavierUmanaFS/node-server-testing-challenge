
exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("project_title", 225).notNullable();
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
