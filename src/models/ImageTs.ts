import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm';
import Kitnet from './Kitnet';

@Entity('images')
export default class Image {
    @PrimaryGeneratedColumn('increment')
    id: number;
 
    @Column()
    path: string;
 
    @ManyToOne(() => Kitnet, kitnet=> kitnet.images)
    @JoinColumn({ name: 'kitnet_id'})
    kitnet: Kitnet;
}