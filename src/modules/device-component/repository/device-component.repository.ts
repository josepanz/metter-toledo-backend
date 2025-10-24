import { PrismaBaseRepository } from '@core/database/prisma-base.repository';
import { PrismaDatasource } from '@core/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { DeviceComponent } from '@prisma/client';

@Injectable()
export class DeviceComponentRepository extends PrismaBaseRepository<DeviceComponent> {
  constructor(prisma: PrismaDatasource) {
    super(prisma, prisma.deviceComponent);
  }
}
