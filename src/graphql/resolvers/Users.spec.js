/**
 * @file Defining db test
 * @link http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

// Importing db models
import db from '../../models';

// Extracting model from db;
const Users = db.Users;

test("it adds the user to the memory store", async () => {
  const result = Users.create({ name: "user_test", email: "user@test.com" });

  expect(result).toContain({ name: "user_test", email: "user@test.com" });
});

test("it returns the added user", async () => {
  expect(!!Users.find({ where: { name: "user_test" }})).toEqual(true);
});

test("finds by id", async () => {
  Users.create({ id: 999, name: "user_test", email: "user999@test.com" });

  const result = Users.find({ where: { id: 999 }});

  expect(result).toEqual({ id: 999, name: "user_test", email: "user999@test.com" });
});

test("removes by id removes from the datastore", async () => {
  Users.destroy({ where: { id: 999 }});

  expect(!!Users.findAll().filter(i => i.id === 999)).toBeFalsy();
});

test("removes by name removes from the datastore", async () => {
  Users.destroy({ where: { name: 'user_test' }});

  expect(!!Users.findAll().filter(i => i.name === "user_test")).toBeNull();
});
