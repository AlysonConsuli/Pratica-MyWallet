import connection from "../database.js";

const getUserByEmail = async (email) => {
  return connection.query(`SELECT * FROM "users" WHERE "email"=$1`, [email]);
};

const insertUser = async (name, email, hashedPassword) => {
  return connection.query(
    `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
    [name, email, hashedPassword]
  );
};

const authRepository = {
  getUserByEmail,
  insertUser,
};

export default authRepository;
