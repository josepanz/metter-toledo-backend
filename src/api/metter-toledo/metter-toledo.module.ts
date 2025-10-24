import { Module } from '@nestjs/common';
import { PrismaDatasource } from 'src/core/database/prisma.service';
import { MetterToledoController } from './controllers/metter-toledo.controller';
import { MetterToledoService } from './services/metter-toledo.service';
import { MeasurementModule } from '@modules/measurement/measurement.module';
import { Ind360Service } from '@modules/ind360/services/ind360.service';
import { DeviceComponentModule } from '@modules/device-component/device-component.module';

@Module({
  imports: [MeasurementModule, DeviceComponentModule],
  controllers: [MetterToledoController],
  providers: [PrismaDatasource, MetterToledoService, Ind360Service],
})
export class MetterToledoModule {}
