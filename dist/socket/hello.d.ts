import { Context } from '@midwayjs/socketio';
export declare class HelloSocketController {
    ctx: Context;
    onConnectionMethod(): Promise<void>;
    gotMessage(data: any): Promise<void>;
}
