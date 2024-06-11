import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateLinksDto } from './dto/create-links.dto';
import { LinkService } from './links.service';
import { Link } from './schemas/links.schema';

@Controller('link')
export class LinkController {
  constructor(private linkService: LinkService) {}

  @Get()
  getAll(): Promise<Link[]> {
    return this.linkService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<Link> {
    return this.linkService.getOne(id);
  }

  @Post()
  create(@Body() allProps: CreateLinksDto): Promise<Link> {
    return this.linkService.create(allProps);
  }

  @Put(':id')
  update(@Param('id') id, @Body() allProps: CreateLinksDto): Promise<Link> {
    return this.linkService.update(id, allProps);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<Link> {
    return this.linkService.remove(id);
  }
}
