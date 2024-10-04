import { VehicleService } from './vehicle.service';
import { VehicleDto } from './vehicle.dto';
export declare class VehicleController {
    private readonly vehicleService;
    constructor(vehicleService: VehicleService);
    findAll(response: any): Promise<any>;
    findOne(id: string, response: any): Promise<any>;
    create(vehicleDto: VehicleDto, response: any): Promise<any>;
    update(id: string, vehicleDto: Partial<VehicleDto>, response: any): Promise<any>;
    remove(id: string, response: any): Promise<any>;
}
