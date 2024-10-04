import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'vehicle'})
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  VIN: string;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  mileage: number;
}
