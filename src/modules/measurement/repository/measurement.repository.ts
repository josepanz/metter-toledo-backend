import { PrismaBaseRepository } from '@core/database/prisma-base.repository';
import { PrismaDatasource } from '@core/database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Measurement } from '@prisma/client';

@Injectable()
export class MeasurementRepository extends PrismaBaseRepository<Measurement> {
  constructor(prisma: PrismaDatasource) {
    super(prisma, prisma.measurement);
  }
}
