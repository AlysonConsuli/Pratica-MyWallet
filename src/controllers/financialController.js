import financialService from "../services/financialService.js";

export const postFinancialEvents = async (req, res) => {
  const { user } = res.locals;
  const userId = user.id;
  const { value, type } = req.body;

  await financialService.postFinancialEvents(userId, value, type);

  res.sendStatus(201);
};
