import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    private ips;
    constructor(appService: AppService);
    getHello(): any;
    receiveIp(body: {
        appName: string;
        ip: string;
    }): void;
}
