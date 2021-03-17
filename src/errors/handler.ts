import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string[];
}

const errorHandler: ErrorRequestHandler = (error, request, response, next) => {
  if (error instanceof ValidationError) {
    
    // console.log('entrou!!');

    let errors: ValidationErrors = {};
    let a = '';
    error.inner.forEach(err => {
        errors[err.path + a] = err.errors;
    });

    // erro 400: erro bad request padrão, erro de requisiçção mal feita.
    return response.status(400).json({ message: 'Validation fails', errors })
  }
//   console.error(error);
  return response.status(500).json({ message: 'Internal server error!!' });
};

export default errorHandler;

// error é o erro que aconteceu
// request é a minha requisição
// response é a resposta que quero enviar
