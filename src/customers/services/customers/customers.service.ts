import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/createCustomer.dto';

import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [
    {
      id: 1,
      name: 'sam',
      surname: 'Smith',
    },
    {
      id: 2,
      name: 'Danny',
      surname: 'Toon',
    },
    {
      id: 3,
      name: 'Jonny',
      surname: 'Boob',
    },
  ];

  findCustomerById(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  findAllCustomers() {
    return this.customers;
  }

  createCustomer(customerDto: CreateCustomerDto) {
    return this.customers.push(customerDto);
  }
}
