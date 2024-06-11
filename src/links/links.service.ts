import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Link, LinkDocument } from './schemas/links.schema';
import { Model } from 'mongoose';
import { CreateLinksDto } from './dto/create-links.dto';

@Injectable()
export class LinkService {
  constructor(@InjectModel(Link.name) private LinkModel: Model<LinkDocument>) {}

  async getAll(): Promise<Link[]> {
    return await this.LinkModel.find().exec();
  }

  async getOne(id: string): Promise<Link> {
    const link = await this.LinkModel.findById(id).exec();
    if (!link) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return link;
  }

  async create(allProps: CreateLinksDto): Promise<Link> {
    const link = new this.LinkModel(allProps);
    return await link.save();
  }

  async update(id: string, allProps: CreateLinksDto): Promise<Link> {
    const updatedLink = await this.LinkModel.findByIdAndUpdate(id, allProps, { new: true }).exec();
    if (!updatedLink) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return updatedLink;
  }

  async remove(id: string): Promise<Link> {
    const deletedLink = await this.LinkModel.findByIdAndDelete(id).exec();
    if (!deletedLink) {
      throw new NotFoundException(`Link with ID ${id} not found`);
    }
    return deletedLink;
  }
}
