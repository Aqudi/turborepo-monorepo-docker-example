import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Req() request: Request): string {
    request.session.visits = request.session.visits
      ? request.session.visits + 1
      : 1;
    return this.appService.getHello() + " Visits: " + request.session.visits;
  }
}
