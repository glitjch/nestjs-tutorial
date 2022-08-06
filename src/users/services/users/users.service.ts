import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      username: 'anson',
      password: 'chewbaca',
    },
    {
      username: 'dany',
      password: 'chewbaca',
    },
    {
      username: 'fanny',
      password: 'chewbaca',
    },
    {
      username: 'Chilpu',
      password: 'chewbaca',
    },
    {
      username: 'Mogo',
      password: 'chewbaca',
    },
  ];

  getAllUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find(
      (user) => plainToClass(SerializedUser, user).username === username,
    );
  }
}
