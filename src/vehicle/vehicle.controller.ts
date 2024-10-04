// src/vehicle/vehicle.controller.ts
import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { VehicleDto } from './vehicle.dto';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  async findAll(@Res() response) {
    try{
      const getData = await this.vehicleService.findAll();
      return response.status(HttpStatus.OK).json({message: 'get vehicle data found successfully', statusCode : 200, data : getData });
    }catch(error){
        return response.status(HttpStatus.BAD_REQUEST).json({
            statusCode: 404,
            message: 'Error: vehicle data not found!',
            error: 'Bad Request'
        });
    }
     
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try{
        let getData = await this.vehicleService.findOne(+id);
        return response.status(HttpStatus.OK).json({
            message: 'get Vehicle data found successfully', statusCode : 200, data : getData });

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 404, message : 'Error: Vahicle data not found'}); 
    }
  }

  @Post()
  async create(@Body() vehicleDto: VehicleDto, @Res() response) {
    try{
        const createData = await this.vehicleService.create(vehicleDto);
        return response.status(HttpStatus.OK).json({
            statusCode : 201,
            message: 'Vehicle has been created successfully',
             data : createData});

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 500, message : 'Error: vehicle not created'}); 
    }
    
  }


  @Put(':id')
  async update(@Param('id') id: string, @Body() vehicleDto: Partial<VehicleDto>, @Res() response){
    try{
        const updateData = await this.vehicleService.update(+id, vehicleDto);
        return response.status(HttpStatus.OK).json({
            statusCode : 200,
            message: 'Vehicle has been successfully updated',
            data : updateData});

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 500, message : "Error: vehicle can't updated"}); 
    }
    
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    try{
        const deleteData = await this.vehicleService.remove(+id);
        return response.status(HttpStatus.OK).json({
            statusCode : 204,
            message: 'Vehicle deleted successfully',
            data : deleteData});        

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 500, message : "Error: vehicle can't deleted"}); 
    }
  }

  @Post('valid')
  async vehicleValid(@Body() bodyData: { vehicleId :'string' }, @Res() response) {
    try{
        let Vin = bodyData?.vehicleId;
        const validCheck = await this.vehicleService.VehicleValid(Vin)
        return response.status(HttpStatus.OK).json({
          statusCode : validCheck ? 200 : 401,
          message: validCheck ? "Valid vehicle data ": "invalid vehicle data",
        });

    }catch(error){
        return response.status(500).json({ status:'error', statusCode : 500, message : 'Error: vehicle not created'}); 
    }
    
  }


}
