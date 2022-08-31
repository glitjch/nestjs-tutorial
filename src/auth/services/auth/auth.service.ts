import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {}

  async validateUser(username: string, password: string) {
    console.log('Inside AuthService.validateUser');
    const userDb = await this.usersService.findUserByUsername(username);
    if (userDb) {
      const matched = comparePasswords(password, userDb.password);
      if (matched) {
        console.log('User Validation Success');
        return userDb;
      } else {
        console.log('Password did not matched');
      }
    }
    return null;
  }
}
