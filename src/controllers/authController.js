import authService from "../services/authService.js";

export const signUp = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.sendStatus(422);
  }
  await authService.signUp(name, email, password);
  res.sendStatus(201);
};
