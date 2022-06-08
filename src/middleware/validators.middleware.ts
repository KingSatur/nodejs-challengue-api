import { body } from 'express-validator';
import ValidationError from '../handler/validation.error';

const email = body('correo', 'Correo invalido').optional().isEmail();

const password = (password: string) =>
  body(password, 'Password invalido').isString().isLength({ min: 8 });

const validateRegisterUser = [
  body('email', 'Correo invalido').optional().isEmail(),
  body('password', 'Password invalido').isString().isLength({ min: 8 }),
  body('firstName', 'Nombre invalido').isString(),
  body('lastName', 'Apellido invalido').isString(),
  body('role', 'user role').optional().isString().isIn(['CUSTOMER']),
  ValidationError,
];

const validateLoginUser = [
  body('email', 'Correo invalido').exists(),
  body('password', 'Password invalido').exists(),
  ValidationError,
];

const validateEditUser = [
  body('residence', 'Correo invalido').isString().exists(),
  body('photoUrl', 'Correo invalido').isString().exists(),
];

const validateAddProductToInventary = [
  body('email', 'Correo invalido').exists(),
  body('password', 'Password invalido').exists(),
  ValidationError,
];

export default {
  validateRegisterUser,
  validateLoginUser,
  validateEditUser,
  validateAddProductToInventary,
};
