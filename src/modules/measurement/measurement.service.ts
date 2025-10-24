import { PrismaBaseService } from '@common/services/base/prisma-base.service';
import { Injectable } from '@nestjs/common';
import { Measurement } from '@prisma/client';
import { MeasurementRepository } from './repository/measurement.repository';

@Injectable()
export class MeasurementService extends PrismaBaseService<Measurement> {
  constructor(private readonly exampleRepository: MeasurementRepository) {
    super(exampleRepository);
  }
}
