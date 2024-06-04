import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type StepDocument = HydratedDocument<Step>;

@Schema()
export class StepDetail {
  
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  priority: number;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  isCompleted: boolean;
}

@Schema()
export class Step {
  @Prop({ type: Types.ObjectId, auto: true })
  _id: Types.ObjectId;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  priority: number;

  @Prop({ required: true })
  stepDetails: [StepDetail];
}

export const StepSchema = SchemaFactory.createForClass(Step);
