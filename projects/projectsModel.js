const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(project) {
  try{
    const [id] = await db("projects").insert(project, "id");
    return findById(id);
  } catch (error) {
    throw error;
  }
}

async function update(id, changes) {
  return null;
}

function remove(id) {
return db("projects").where({ id }).del();
}

function getAll() {
  return db('projects');
}

function findById(id) {
  return db("projects").where({ id }).first();
}
