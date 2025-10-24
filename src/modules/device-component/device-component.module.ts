import { Module } from '@nestjs/common';
import { DeviceComponentService } from './device-component.service';
import { DatabaseModule } from '@core/database/database.module';
import { DeviceComponentRepository } from './repository/device-component.repository';

@Module({
  imports: [DatabaseModule],
  exports: [DeviceComponentService],
  controllers: [],
  providers: [DeviceComponentService, DeviceComponentRepository],
})
export class DeviceComponentModule {}
