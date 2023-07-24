const awilix = require('awilix');
const {asClass} = require('awilix');
const UserRepository = require('../src/repositories/userRepository');
const ShareRepository = require('../src/repositories/shareRepository');
const PortfolioRepository = require('../src/repositories/portfolioRepository');


const container = awilix.createContainer();

container.register({
  UserRepository: asClass(UserRepository),
  ShareRepository: asClass(ShareRepository),
  PortfolioRepository: asClass(PortfolioRepository),
});

  
module.exports = container