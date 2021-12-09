/**
 * @file Defining db test
 * @link http://docs.sequelizejs.com/manual/tutorial/querying.html
 */

// Importing db models
import db from '../../models';

// Extracting model from db;
const Users = db.Users;

test("it adds the user to the memory store", async () => {
  const result = Users.create({ name: "user", email: "user@test.com" });

  expect(result).toEqual({ name: "user", email: "user@test.com" });
});

test("it returns the added user", async () => {
  expect(!!Users.find({ where: { name: "user" }})).toEqual(true);
});

test("finds by id", async () => {
  Users.create({ id: 999, name: "user", email: "user999@test.com" });

  const result = Users.find({ where: { id: 999 }});

  expect(result).toEqual({ id: 999, name: "user", email: "user999@test.com" });
});

test("removes by id removes from the datastore", async () => {
  Users.destroy({ where: { id: 999 }});

  expect(!!Users.findAll(i => i.id === 999)).toBeFalsy();
});

test("removes by id returns the id", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.removeById("1");

  expect(result).toEqual("1");
});

test("removes by name removes from the datastore", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  await usersRepository.removeByName("user");

  expect(!!usersRepository.users.find(i => i.id === "1")).toBeFalsy();
});

test("removes by name returns the id", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.removeByName("user");

  expect(result).toEqual("1");
});

test("when nothing to remove return 0", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.removeByName("nonexisting");

  expect(result).toEqual("0");
});

test("finds by name", async () => {
  const usersRepository = new UsersRepository();
  usersRepository.users.push({ id: "1", name: "user" });

  const result = await usersRepository.findByName("user");

  expect(result).toEqual({ id: "1", name: "user" });
});