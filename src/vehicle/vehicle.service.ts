import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { VehicleDto } from './vehicle.dto'; // used for validate Object field

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private vehicleRepository: Repository<Vehicle>,
  ) {}

  async findAll(): Promise<Vehicle[]> {
    try{
        const result = await this.vehicleRepository.find();
        return result;
    }catch(error){
       throw error;
    }
  }

  async findOne(id: number): Promise<Vehicle> {
    try{
        const result = await this.vehicleRepository.findOneBy({ id });
        if( !result){
            throw new Error("Vahicle data not found");
        }
        return result;
    }catch(error){
        throw error;
    }
  }

  async create(vehicleDto: VehicleDto): Promise<Vehicle> {
    try{
        const vehicle = this.vehicleRepository.save(vehicleDto);
        return vehicle;
    }catch(error){
        throw error;
    }
  }

   async update(id: number, vehicleDto: Partial<VehicleDto>): Promise<Vehicle> {
    try{
        await this.vehicleRepository.update(id, vehicleDto);
        return this.findOne(id);
    
    }catch(error){
        throw error;
    }
  }

  async remove(id: number): Promise<void> {
    try{
        const result = await this.vehicleRepository.delete(id);
    }catch(error){
        throw error;
    }
  }

  async VehicleValid(VIN){
    try{
        let result = await this.vehicleRepository.findOneBy({ VIN});
        return result ? true : false;
    }catch(error){
        throw error;
    }
  }


}
