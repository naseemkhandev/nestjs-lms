import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service.js';
import { RegisterUserDto } from './dto/registerUser.dto.js';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async registerUser(reisterUserDto: RegisterUserDto) {
    console.log('Registering user:', reisterUserDto);

    const hashedPassword = await bcrypt.hash(reisterUserDto.password, 10);

    return this.userService.createUser({
      ...registerUserDto,
      password: hashedPassword,
    });
  }
}
