import financialRepository from "../repositories/financialRepository.js";

async function postFinancialEvents(userId, value, type) {
  if (!value || !type) {
    throw {
      type: "unprocessableEntity",
      message: "Unprocessable Entity",
    };
  }
  const financialTypes = ["INCOME", "OUTCOME"];
  if (!financialTypes.includes(type)) {
    throw {
      type: "unprocessableEntity",
      message: "Unprocessable Entity",
    };
  }
  if (value < 0) {
    throw {
      type: "unprocessableEntity",
      message: "Unprocessable Entity",
    };
  }
  await financialRepository.insertFinancialEvent(userId, value, type);
}

const financialService = {
  postFinancialEvents,
};

export default financialService;
