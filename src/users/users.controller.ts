import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { CreatePersonDto } from './dto/create-users.dto';
import { UsersService } from './users.service';
import { User } from './schemas/users.schema';
import { AuthGuard } from '@nestjs/passport';
import { ObjectId } from 'mongoose';

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
  update(@Param('id') id, @Body() allProps: CreatePersonDto): Promise<User> {
    return this.userService.update(id, allProps);
  }

  @Delete(':id')
  remove(@Param('id') id): Promise<User> {
    return this.userService.remove(id);
  }

  @Post(':userId/addFavoriteFab/:faqId')
  addFavorite(
    @Param('userId') userId: ObjectId,
    @Param('faqId') faqId: ObjectId,
  ): Promise<any> {
    console.log('userId', userId);
    console.log('faqId', faqId);
    return this.userService.addFavoriteFab(userId, faqId);
  }

  @Post(':userId/removeFavoriteFab/:faqId')
  removeFavorite(
    @Param('userId') userId: ObjectId,
    @Param('faqId') faqId: ObjectId,
  ): Promise<any> {
    console.log('userId', userId);
    console.log('faqId', faqId);
    return this.userService.removeFavoriteFab(userId, faqId);
  }

  @Post(':id/steps/:stepId')
  addSteps(
    @Param('id') id: string,
    @Param('stepId') stepId: string,
  ): Promise<any> {
    console.log('id', id);
    console.log('stepId', stepId);
    return this.userService.addSteps(id, stepId);
  }
}
