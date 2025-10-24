import { Module } from '@nestjs/common';
import { ExampleApiModule } from './example/example-api.module';
import { MetterToledoModule } from './metter-toledo/metter-toledo.module';

@Module({
  imports: [ExampleApiModule, MetterToledoModule],
})
export class ApiModule {}
