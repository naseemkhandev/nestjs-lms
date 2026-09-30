import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from '../auth/dto/registerUser.dto.js';

@Injectable()
export class UserService {
  createUser(registerUserDto: RegisterUserDto) {
    return { message: 'User created successfully', user: registerUserDto };
  }
}
