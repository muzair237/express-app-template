import baseUserValidator from './baseUser.validator.js';

const updateUserValidator = baseUserValidator.append({
  name: baseUserValidator.extract('name').optional(),
  email: baseUserValidator.extract('email').optional(),
  password: baseUserValidator.extract('password').optional(),
});

export default updateUserValidator;
