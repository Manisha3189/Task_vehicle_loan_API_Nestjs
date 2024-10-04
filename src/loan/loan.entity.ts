import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name : 'loans'})
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleId: string;

  @Column()
  applicantName: string;

  @Column()
  applicantEmail: string;

  @Column({ unique: true })
  applicantPhoneNumber: string;

  @Column()
  applicantPhoneAddress: string;

  @Column({ default: 'pending'}) 
  status: string;  // pending, approved, rejected
}
