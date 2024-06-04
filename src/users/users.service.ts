import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schemas/users.schema';
import { Model, ObjectId, SchemaTypes } from 'mongoose';
import { CreatePersonDto } from './dto/create-users.dto';
import { Step, StepDocument } from 'src/steps/schemas/steps.schema';
import { IUserIdPayload } from './interfaces';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Step.name) private stepModel: Model<StepDocument>,
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userModel.find();
  }

  async getOne(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    return user;
  }

  async create(allProps: CreatePersonDto): Promise<User> {
    const user = new this.userModel(allProps);
    return await user.save();
  }

  async update(id: string, allProps: CreatePersonDto): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, allProps, { new: true });
  }

  async remove(id: string): Promise<User> {
    return await this.userModel.findByIdAndDelete(id);
  }

  async addFavoriteFab(userId: ObjectId, faqId: ObjectId): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      userId,
      { $addToSet: { userFavoriteFaqs: faqId } },
      { new: true },
    ).exec();
  } 

/*   async addFavoriteFab(userId: string, faqId: string): Promise<User> {
    const user = await this.userModel.findById(userId);
    user.userFavoriteFaqs.push(faqId as any);
    return await user.save();
  } */
  async removeFavoriteFab(userId: ObjectId, faqId: ObjectId): Promise<User> {
    return this.userModel.findByIdAndUpdate(
      userId,
      { $pull: { userFavoriteFaqs: faqId } },
      { new: true },
    ).exec();
  }

  async addSteps(id: string, stepId: string): Promise<User> {
    const user = await this.userModel.findById(id);
    console.log("user: "+ user)

    /* user.userStepIds.push(stepId as any) */
     
    // console.log('return:');

    return await user.save();
  }

  /* async updateStepById(userId: string, stepId: string, stepData: any): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    console.log(user)

    const stepIndex = user.steps.findIndex(step => step._id.toString() === stepId);
    if (stepIndex === -1) {
      throw new NotFoundException('Step not found');
    }

    user.steps[stepIndex] = { ...user.steps[stepIndex], ...stepData };

    return user.save();
  } */
  async updateStepDetailById(userId: string, stepId: string, stepDetailId: string, stepDetailData: any): Promise<User> {
    const user = await this.userModel.findById(userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
  
    const stepIndex = user.steps.findIndex(step => step._id.toString() === stepId);
    if (stepIndex === -1) {
      throw new NotFoundException('Step not found');
    }
  
    const step = user.steps[stepIndex];
    const stepDetailIndex = step.stepDetails.findIndex(detail => detail._id.toString() === stepDetailId);
    if (stepDetailIndex === -1) {
      throw new NotFoundException('Step detail not found');
    }
  
    Object.assign(step.stepDetails[stepDetailIndex], stepDetailData);
  
    // Mark the step and stepDetail as modified
    user.markModified(`steps.${stepIndex}.stepDetails.${stepDetailIndex}`);
  
    await user.save();
  
    return user;
  }
  
  
  
  
}
