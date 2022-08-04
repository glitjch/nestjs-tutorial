import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      name: 'sam',
      dateCreated: new Date(),
    },
    {
      id: 2,
      name: 'Danny',
      dateCreated: new Date(),
    },
    {
      id: 1,
      name: 'Jonny',
      dateCreated: new Date(),
    },
  ];

  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
