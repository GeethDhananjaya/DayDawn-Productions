const productionService = require('../services/productionService');
const { successResponse } = require('../utils/response');

const getProductions = async (req, res, next) => {
  try {
    const { category, limit } = req.query;
    const productions = await productionService.listProductions({ category, limit });
    return successResponse(res, productions, 200, 'Productions retrieved');
  } catch (err) {
    next(err);
  }
};

const getProductionById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const production = await productionService.getProductionById(id);
    return successResponse(res, production, 200, 'Production retrieved');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProductions,
  getProductionById,
};
