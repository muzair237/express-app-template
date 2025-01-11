import baseUserValidator from './baseUser.validator.js';

const createUserValidator = baseUserValidator.append({
  name: baseUserValidator.extract('name').required(),
  email: baseUserValidator.extract('email').required(),
  password: baseUserValidator.extract('password').required(),
});

export default createUserValidator;
