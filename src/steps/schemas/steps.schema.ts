import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { StepDetailDto } from '../dto/create-steps.dto';

export type StepDocument = HydratedDocument<Step>;

@Schema()
export class Step {
    @Prop()
    title: string;
  
    @Prop()
    priority: number;

    @Prop()
    stepDetails: StepDetailDto[]; 
    

}

export const StepSchema = SchemaFactory.createForClass(Step);
