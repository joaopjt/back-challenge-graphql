/**
 * @file Development configuration
 */
module.exports = {
  /*
  App settings
  */
  app: {
    host: 'localhost',
    port: 8080,
  },

  /*
  Database configuration
  */
  database: {
    dialect: 'mysql',
    name: 'sr-joao-julio',
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
  },

  /*
  GraphQl configuration
  */
  graphql: {
    path: '/api/graphql',
  },

};
