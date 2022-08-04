import { Module } from '@nestjs/common';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [CustomersModule],
  // providers: [CustomersService],
})
export class AppModule {}
