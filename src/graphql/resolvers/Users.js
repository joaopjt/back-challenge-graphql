/**
 * @file Defining db resolvers
 * @link http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

// Importing db models
import db from '../../models';

// Extracting model from db;
const Users = db.Users;

// Exporting resolvers
export default {

  // All query methods to get information from database
  Query: {
    user: (_, { id }) => Users.find({ where: { id } }),
    users: () => Users.findAll(),
  },

  // Querys methods to mutate information: add, update, delete
  Mutation: {
    addUser: (_, { name, email }) => Users.create({ name, email }),
    deleteUser: (_, { id }) => Users.destroy({ where: { id } }),
    updateUser: (_, { id, name, email }) => Users.update({ name, email }, { where: { id } }),
  },

};
