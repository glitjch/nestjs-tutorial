import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomersController } from './controller/customers/customers.controller';
import { ValidateCustomerAccountMiddleware } from './middleware/validate-customer-account.middleware';
import { ValidateCustomerMiddleware } from './middleware/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';
import { Request, Response, NextFunction } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        ValidateCustomerMiddleware,
        ValidateCustomerAccountMiddleware,
        (req: Request, res: Response, next: NextFunction) => {
          console.log('Last Middleware');
          next();
        },
      )
      .exclude({
        path: 'api/customers/create',
        method: RequestMethod.POST,
      })
      .forRoutes(CustomersController);
  }
}
