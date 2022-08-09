import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    console.log('Inside AuthService.validateUser');
    const userDb = await this.usersService.findUserByUsername(username);
    if (userDb && userDb.password === password) {
      console.log('User Validation Success');
      return userDb;
    }
    return null;
  }
}
