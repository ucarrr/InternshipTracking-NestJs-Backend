import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Step, StepDocument } from './schemas/steps.schema';
import { Model } from 'mongoose';
import { CreateStepDto } from './dto/create-steps.dto';

@Injectable()
export class StepService {
  constructor(@InjectModel(Step.name) private stepModel: Model<StepDocument>) {}

  async getAll(): Promise<Step[]> {
    return await this.stepModel.find();
  }

  async getOne(id: string): Promise<Step> {
    const step = await this.stepModel.findById(id);
    return step;
  }

  async create(allProps: CreateStepDto): Promise<Step> {
    const step = new this.stepModel(allProps);
    return await step.save();
  }

  async update(id: string, allProps: CreateStepDto): Promise<Step> {
    return await this.stepModel.findByIdAndUpdate(id, allProps, { new: true });
  }

  async remove(id: string): Promise<Step> {
    return await this.stepModel.findByIdAndDelete(id);
  }
}

