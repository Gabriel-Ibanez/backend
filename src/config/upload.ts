import multer from 'multer';
import path from 'path'; // boa prática

export default {
    storage: multer.diskStorage({ // boa prática
        destination: path.join(__dirname, '..', '..', 'uploads'),
        filename: (request, file, cb) => {
            const fileName = `${Date.now()}-${file.originalname}`;
            cb(null, fileName);
        },
    })
};

// configuração storage

// pode-se armazenar em um CDN , apazon S3, Google Cloud storage

// sempre que for lidar comcaminhos no Node é bomusar o path
// __dirname : retorna qual o diretorio do meu arquivo upload, todo o caminho até o diretório
// no linux e no Mac a barra do caminho é / , já no windows a barra é \