import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service.js';
import { RegisterUserDto } from './dto/registerUser.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  /** POST /auth/register **/
  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    const result = this.authService.registerUser(registerUserDto);
    return result;
  }
}
