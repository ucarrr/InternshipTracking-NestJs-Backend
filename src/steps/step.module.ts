import { Module } from '@nestjs/common';
import { StepsController } from './step.controller';
import { StepService } from './step.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Step, StepSchema } from './schemas/steps.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Step.name, schema: StepSchema }]),
  ],
  controllers: [StepsController],
  providers: [StepService],
})
export class StepModule {}
