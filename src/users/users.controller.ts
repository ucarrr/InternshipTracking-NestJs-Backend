import { Body, Controller, Delete, Get, Param, Post ,Put} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { User } from './schemas/users.schema';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id): Promise<User> {
    return this.userService.getOne(id);
  }

  @Post()
  create(@Body() allProps: CreatePersonDto): Promise<User> {
    return this.userService.create(allProps);
  }

  @Put(':id')
  update(@Param("id") id, @Body() allProps: CreatePersonDto): Promise<User>{
    return  this.userService.update(id,allProps);

  }

  @Delete(':id')
  remove(@Param("id") id): Promise<User>{
    return this.userService.remove(id);
  }

  @Post(':id/favorites/:faqId')
  addFavorite(@Param('id') id: string, @Param('faqId') faqId: string): Promise<any> {
    console.log('id', id);
    console.log('faqId', faqId);
    return this.userService.addFavorite(id, faqId);
  }
}
