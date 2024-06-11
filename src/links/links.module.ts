import { Module } from '@nestjs/common';
import { LinkController } from './links.controller';
import { LinkService } from './links.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Link, LinkSchema } from './schemas/links.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Link.name, schema: LinkSchema }]),
  ],
  controllers: [LinkController],
  providers: [LinkService],
})
export class LinkModule {}
