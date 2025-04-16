import Joi from 'joi';

const baseUserValidator = Joi.object({
  name: Joi.string().trim().min(2).max(50).messages({
    'string.base': 'Name must be a string',
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 2 characters long',
    'string.max': 'Name cannot exceed 50 characters',
  }),

  email: Joi.string().trim().email().messages({
    'string.base': 'Email must be a string',
    'string.empty': 'Email is required',
    'string.email': 'Email must be a valid email address',
  }),

  password: Joi.string()
    .min(8)
    .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .required()
    .messages({
      'string.base': 'Password must be a string.',
      'string.empty': 'Password cannot be empty.',
      'string.min': 'Password must be at least 8 characters long.',
      'string.pattern.base': 'Password must include uppercase, lowercase, a number, and a special character.',
      'any.required': 'Password is required.',
    }),
});

export default baseUserValidator;
