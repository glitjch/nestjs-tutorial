import { Inject } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { User } from 'src/typeorm';
import { UsersService } from 'src/users/services/users/users.service';

export class SessionSerializer extends PassportSerializer {
  constructor(
    @Inject('USER_SERVICE') private readonly usersService: UsersService,
  ) {
    super();
  }

  serializeUser(user: User, done: (err, user: User) => void) {
    console.log('serializeUser');
    done(null, user);
  }

  async deserializeUser(user: User, done: (err, user: User) => void) {
    console.log('deserializeUser');
    const userDb = await this.usersService.findUserById(user.id);
    return userDb ? done(null, user) : done(null, null);
  }
}
