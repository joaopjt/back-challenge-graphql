
/**
* Sequalize model for articles
* @param {object} sequelize object
* @param {object} DataTypes database types. Constant
* @returns {object} articles
*/
export default (sequelize, DataTypes) => {
  const fields = {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
  };

  return sequelize.define('Users', fields);
};
