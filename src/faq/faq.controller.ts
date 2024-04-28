import { Body, Controller, Delete, Get, Param, Post ,Put} from '@nestjs/common';
import { CreateFaqDto } from './dto/create-faq.dto';
import { FaqService } from './faq.service';
import { Faq } from './schemas/faq.schema';

@Controller('faq')
export class FaqController {
  constructor(private faqService: FaqService) {}
  
  @Get()
  getAll(): Promise<Faq[]> {
    return this.faqService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<Faq> {
    return this.faqService.getOne(id);
  } 

  @Post()
  create(@Body() allProps: CreateFaqDto): Promise<Faq> {
    return this.faqService.create(allProps);
  }

  @Put(':id')
  update(@Param("id") id, @Body() allProps: CreateFaqDto): Promise<Faq>{
    return  this.faqService.update(id,allProps);

  }

  @Delete(':id')
  remove(@Param("id") id): Promise<Faq>{
    return this.faqService.remove(id);
  } 
}
