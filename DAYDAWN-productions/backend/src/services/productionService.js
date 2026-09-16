const productionRepository = require('../repositories/productionRepository');
const AppError = require('../utils/appError');

class ProductionService {
  async listProductions(filters = {}) {
    return productionRepository.findAll(filters);
  }

  async getProductionById(id) {
    const production = await productionRepository.findById(id);
    if (!production) {
      throw new AppError(`Production project with ID '${id}' not found`, 404);
    }
    return production;
  }
}

module.exports = new ProductionService();
