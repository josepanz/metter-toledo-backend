import { Module } from '@nestjs/common';
import { MeasurementService } from './measurement.service';
import { DatabaseModule } from '@core/database/database.module';
import { MeasurementRepository } from './repository/measurement.repository';

@Module({
  imports: [DatabaseModule],
  exports: [MeasurementService],
  controllers: [],
  providers: [MeasurementService, MeasurementRepository],
})
export class MeasurementModule {}
