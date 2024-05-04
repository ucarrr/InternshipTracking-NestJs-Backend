import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StepDocument = HydratedDocument<Step>;

@Schema()
export class StepDetail {
    @Prop()
    priority: number;

    @Prop()
    title: string;

    @Prop()
    isCompleted: boolean;
}

@Schema()
export class Step {
    @Prop()
    title: string;
  
    @Prop()
    priority: number;

    @Prop()
    stepDetails: [StepDetail];
}

export const StepSchema = SchemaFactory.createForClass(Step);
