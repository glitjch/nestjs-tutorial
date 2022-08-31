import {
  Controller,
  Get,
  Post,
  Request,
  Session,
  UseGuards,
} from '@nestjs/common';
import { localAuthGuard } from 'src/auth/utils/localGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(localAuthGuard)
  @Post('login')
  async login(@Request() req) {
    console.log(req);
  }

  @Get('')
  async getAuthSession(@Session() session: Record<string, any>) {
    console.log(session, '  id: ', session.id);
    session.authenticated = true;
    return session;
  }
}
