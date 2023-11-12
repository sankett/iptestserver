import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ipaddress')
export class AppController {
  private ips = {};
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.ips;
  }

  @Post()
  receiveIp(@Body() body: { appName: string, ip: string }) {
    const { appName, ip } = body;
    this.ips[appName] = ip;
    console.log(ip, appName);
    if (this.ips['dotnetApp'] && this.ips['nextjsApp']) {
      // Logic to compare and handle the IPs
      if (this.ips['dotnetApp'] === this.ips['nextjsApp']) {
        console.log('IPs match');
      } else {
        console.log('IPs do not match');
      }
    }
  }
}
