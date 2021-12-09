/**
 * @file Defining db test
 * @link http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

// Importing db models
import db from '../../models';

// Extracting model from db;
const Projects = db.Projects;

test("it adds the user to the memory store", async () => {
  const result = Projects.create({ name: "project_test", price: 12.99 });

  expect(result).toContain({ name: "project_test", price: 12.99 });
});

test("it returns the added user", async () => {
  expect(!!Projects.find({ where: { name: "project_test" }})).toEqual(true);
});

test("finds by id", async () => {
  Projects.create({ id: 999, name: "project_test", price: 12.99 });

  const result = Projects.find({ where: { id: 999 }});

  expect(result).toEqual({ id: 999, name: "project_test", price: 12.99 });
});

test("removes by id removes from the datastore", async () => {
  Projects.destroy({ where: { id: 999 }});

  expect(!!Projects.findAll().filter(i => i.id === 999)).toBeFalsy();
});

test("removes by name removes from the datastore", async () => {
  Projects.destroy({ where: { name: 'project_test' }});

  expect(!!Projects.findAll().filter(i => i.name === "project_test")).toBeNull();
});
