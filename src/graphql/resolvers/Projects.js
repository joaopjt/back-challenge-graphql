/**
 * @file Defining db resolvers
 * @link http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

// Importing db models
import db from '../../models';

// Extracting model from db;
const Projects = db.Projects;

// Exporting resolvers
export default {

  // All query methods to get information from database
  Query: {
    project: (_, { id }) => Projects.find({ where: { id } }),
    projects: () => Projects.findAll(),
  },

  // Querys methods to mutate information: add, update, delete
  Mutation: {
    addProject: (_, { name, price, user }) => {
      const { id } = Users.create({ ...user });
      let user_id = id;
      Projects.create({ name, price , user_id });
    },
    deleteProject: (_, { id }) => Projects.destroy({ where: { id } }),
    updateProject: (_, { id, name, price }) => Projects.update({ name, price }, { where: { id } }),
  },

};
