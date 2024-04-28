import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Faq, FaqDocument } from './schemas/faq.schema';
import { Model } from 'mongoose';
import { CreateFaqDto } from './dto/create-faq.dto';

@Injectable()
export class FaqService {
  constructor(@InjectModel(Faq.name) private faqModel: Model<FaqDocument>) {}

  async getAll(): Promise<Faq[]> {
    return await this.faqModel.find();
  }

  async getOne(id: string): Promise<Faq> {
    const faq = await this.faqModel.findById(id);
    return faq;
  }

  async create(allProps: CreateFaqDto): Promise<Faq> {
    const faq = new this.faqModel(allProps);
    return await faq.save();
  }

  async update(id: string, allProps: CreateFaqDto): Promise<Faq> {
    return await this.faqModel.findByIdAndUpdate(id, allProps, { new: true });
  }

  async remove(id: string): Promise<Faq> {
    return await this.faqModel.findByIdAndDelete(id);
  }
}
 
