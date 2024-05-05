import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('me')
  userInfo(@Request() req) {
    console.log('meeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee: ');
    const userId = req.user.userId;

    console.log('Controller User: ' + userId);

    return this.authService.userInfo(userId);
  }
}
