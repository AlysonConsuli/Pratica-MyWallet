import connection from "../database.js";

const insertFinancialEvent = async (userId, value, type) => {
  return connection.query(
    `INSERT INTO "financialEvents" ("userId", "value", "type") VALUES ($1, $2, $3)`,
    [userId, value, type]
  );
};

const financialRepository = {
  insertFinancialEvent,
};

export default financialRepository;
