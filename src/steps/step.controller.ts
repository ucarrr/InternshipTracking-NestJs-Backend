import { Body, Controller, Delete, Get, Param, Post ,Put} from '@nestjs/common';
import { CreateStepDto } from './dto/create-steps.dto';
import { StepService } from './step.service';
import { Step } from './schemas/steps.schema';

@Controller('steps')
export class StepsController {
  constructor(private stepService: StepService) {}
  @Get()
  getAll(): Promise<Step[]> {
    return this.stepService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<Step> {
    return this.stepService.getOne(id);
  }

  @Post()
  create(@Body() allProps: CreateStepDto): Promise<Step> {
    return this.stepService.create(allProps);
  }

  @Put(':id')
  update(@Param("id") id, @Body() allProps: CreateStepDto): Promise<Step>{
    return  this.stepService.update(id,allProps);

  }

  @Delete(':id')
  remove(@Param("id") id): Promise<Step>{
    return this.stepService.remove(id);
  } 
}
