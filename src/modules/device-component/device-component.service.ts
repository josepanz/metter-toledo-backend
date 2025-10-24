import { PrismaBaseService } from '@common/services/base/prisma-base.service';
import { Injectable } from '@nestjs/common';
import { DeviceComponent } from '@prisma/client';
import { DeviceComponentRepository } from './repository/device-component.repository';

@Injectable()
export class DeviceComponentService extends PrismaBaseService<DeviceComponent> {
  constructor(private readonly exampleRepository: DeviceComponentRepository) {
    super(exampleRepository);
  }
}
