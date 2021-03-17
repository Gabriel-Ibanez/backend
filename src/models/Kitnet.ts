import {Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn} from 'typeorm';
import Image from './ImageTs';

@Entity('kitnets')
export default class Kitnet {
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    latitude: number;
    
    @Column()
    longitude: number;
    
    @Column()
    endereco: string;
    
    @Column()
    metragem: number;
    
    @Column()
    aluguel: number;
    
    @Column()
    condominio: number;
    
    @Column()
    iptu: number;
    
    @Column()
    portaria: boolean;
    
    @Column()
    elevador: boolean;
    
    @Column()
    mobiliado: boolean;
    
    @Column()
    pet: boolean;
    
    @Column()
    vaga: boolean;
    
    @Column()
    descricao: string;
    
    @Column()
    whatsapp: number;

    @OneToMany(()=> Image, image => image.kitnet, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: 'kitnet_id'})
    images: Image[];
}