import { Repository } from 'typeorm';
import { Vehicle } from './vehicle.entity';
import { VehicleDto } from './vehicle.dto';
export declare class VehicleService {
    private vehicleRepository;
    constructor(vehicleRepository: Repository<Vehicle>);
    findAll(): Promise<Vehicle[]>;
    findOne(id: number): Promise<Vehicle>;
    create(vehicleDto: VehicleDto): Promise<Vehicle>;
    update(id: number, vehicleDto: Partial<VehicleDto>): Promise<Vehicle>;
    remove(id: number): Promise<void>;
}
