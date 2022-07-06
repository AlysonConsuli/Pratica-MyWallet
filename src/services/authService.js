import bcrypt from "bcrypt";

import authRepository from "../repositories/authRepository.js";

async function signUp(name, email, password) {
  const existingUsers = await authRepository.getUserByEmail(email);
  if (existingUsers.rowCount > 0) {
    throw {
      type: "Conflict",
      message: "This user had already exist",
    };
  }
  const hashedPassword = bcrypt.hashSync(password, 12);
  await authRepository.insertUser(name, email, hashedPassword);
}

const authService = {
  signUp,
};

export default authService;
