import { Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import KitnetsController from './controllers/KitnetsController';

const routes = Router();
const upload = multer(uploadConfig);

// no padrão docontroller existem index (para listar, pode ser list também), 
//    show, create, update e delete
routes.get("/kitnets", KitnetsController.index);
routes.get("/kitnets/:id", KitnetsController.show);
routes.post("/kitnets", upload.array('images'),KitnetsController.create);
// array(nome do campo que vai ter as imagens)
export default routes;


// Padrão/Arquitetura MVC
// Model - Representação de uma tabela no banco (ou quase isso). Representatividade de uma entidade em nossa aplicação, de um dado de um usuário, de uma kitnet.
// View - Telas
// Controller - onde fica a lógica das rotas


//console.log(request.body);