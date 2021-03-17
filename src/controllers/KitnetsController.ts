import { Request, Response } from "express";
import { getRepository } from "typeorm";
import kitnetView from "../views/kitnets_view";
import * as Yup from "yup";

import Kitnet from "../models/Kitnet";

export default {
  async index(request: Request, response: Response) {
    const kitnetsRepository = getRepository(Kitnet);

    const kitnets = await kitnetsRepository.find({
      relations: ["images"],
    });

    return response.json(kitnetView.renderMany(kitnets));
  },

  async show(request: Request, response: Response) {
    const { id } = request.params;

    const kitnetsRepository = getRepository(Kitnet);
    const kitnet = await kitnetsRepository.findOneOrFail(id, {
      relations: ["images"],
    });
    return response.json(kitnetView.render(kitnet));
  },

  async create(request: Request, response: Response) {
    //console.log(request.files);
    const {
      latitude,
      longitude,
      endereco,
      metragem,
      aluguel,
      condominio,
      iptu,
      portaria,
      elevador,
      mobiliado,
      pet,
      vaga,
      descricao,
      whatsapp,
    } = request.body;

    const kitnetsRepository = getRepository(Kitnet);

    // hackzinho para lidar com upload de múltiplos arquivos
    const requestImages = request.files as Express.Multer.File[];
    const images = requestImages.map((image) => {
      return { path: image.filename };
    });

    const data = {
      latitude,
      longitude,
      endereco,
      metragem,
      aluguel,
      condominio,
      iptu,
      portaria: portaria == 'true',
      elevador: elevador == 'true',
      mobiliado: mobiliado == 'true',
      pet: pet == 'true',
      vaga: vaga == 'true',
      descricao,
      whatsapp,
      images,
    };

    // boas práticas
    // schema de validação da kitnet

    const schema = Yup.object().shape({
      latitude: Yup.string().required('Latitude obrigatória'),
      longitude: Yup.string().required(),
      endereco: Yup.string().required().max(200),
      metragem: Yup.number().required(),
      aluguel: Yup.number().required(),
      condominio: Yup.number().required(),
      iptu: Yup.number().required(),
      portaria: Yup.boolean().required(),
      elevador: Yup.boolean().required(),
      mobiliado: Yup.boolean().required(),
      pet: Yup.boolean().required(),
      vaga: Yup.boolean().required(),
      descricao: Yup.string().max(200),
      whatsapp: Yup.number().required(),
      images: Yup.array(
        Yup.object().shape({
          path: Yup.string().required(),
        })
      ),
    });

    // para fazer a validação mesmo:
    await schema.validate(data, {
      abortEarly: false, // evita que já retorne após encontrar o primeiro erro
    });
    const kitnet = kitnetsRepository.create(data);

    await kitnetsRepository.save(kitnet);

    //   return response.json({ message: "Oi10" });
    return response.status(201).json(kitnet); // coloca-se o status 201 para indicar que algo foi criado. Elemento opcional mas deixa a API mais orgnizada.
  },
};
