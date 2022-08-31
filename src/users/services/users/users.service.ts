import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToClass } from 'class-transformer';
import { CreateUserDto } from 'src/users/dto/createUser.dto';
import { SerializedUser, User } from 'src/users/types/user';
import { User as UserEntity } from 'src/typeorm/User';
import { Repository } from 'typeorm';
import { encodePassword } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}
  private users: User[] = [];

  getAllUsers() {
    return this.users.map((user) => plainToClass(SerializedUser, user));
  }

  getUserByUsername(username: string) {
    return this.users.find(
      (user) => plainToClass(SerializedUser, user).username === username,
    );
  }

  getUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto) {
    const password = encodePassword(createUserDto.password);
    console.log(password);
    const newUser = this.userRepository.create({ ...createUserDto, password });
    return this.userRepository.save(newUser);
  }

  findUserByUsername(username: string) {
    console.log('Inside UsersService.findUserByUsername');
    return this.userRepository.findOne({ where: { username } });
  }

  findUserById(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }
}
