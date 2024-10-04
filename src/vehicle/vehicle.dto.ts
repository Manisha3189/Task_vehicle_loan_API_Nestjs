// src/vehicle/vehicle.dto.ts
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class VehicleDto {
  @IsString()
  @IsNotEmpty()
  VIN: string;

  @IsString()
  @IsNotEmpty()
  make: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsNumber()
  @IsNotEmpty()
  mileage: number;
}
