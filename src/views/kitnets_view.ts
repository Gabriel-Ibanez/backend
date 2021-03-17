import Kitnet from '../models/Kitnet';
import images_view from './images_view';
import imagesView from './images_view'
export default{
    render(kitnet: Kitnet){
        return {
            id:kitnet.id,
            latitude: kitnet.latitude,
            longitude: kitnet.longitude,
            endereco: kitnet.endereco,
            metragem: kitnet.metragem,
            aluguel: kitnet.aluguel,
            condominio: kitnet.condominio,
            iptu: kitnet.iptu,
            portaria: kitnet.portaria,
            elevador: kitnet.elevador,
            mobiliado: kitnet.mobiliado,
            pet: kitnet.pet,
            vaga: kitnet.vaga,
            descricao: kitnet.descricao,
            whatsapp: kitnet.whatsapp,
            images: imagesView.renderMany(kitnet.images)
        };
    },

    renderMany(kitnets: Kitnet[]){
        return kitnets.map(kitnet => this.render(kitnet));
    }
};