// import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// @Entity({ name: 'loan' })  // Specify the table name here
// export class LoanDto {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   vehicleId: number;

//   @Column({ unique: true })
//   applicantEmail: string;

//   @Column()
//   applicantPhoneNumber: string;

//   @Column()
//   applicantPhoneAddress: string;

//   @Column()
//   status: string;



import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class LoanDto {
  @IsString()
  @IsNotEmpty()
  vehicleId: string;

  @IsString()
  @IsNotEmpty()
  applicantEmail: string;

  @IsString()
  @IsNotEmpty()
  applicantPhoneNumber: string;

  @IsNumber()
  @IsNotEmpty()
  applicantPhoneAddress: string;

  @IsNumber()
  @IsNotEmpty()
  status: string;

}

