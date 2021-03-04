import { IMethodAspect, JoinPoint } from '@midwayjs/decorator';
import { Context } from 'egg';
export declare class ReportInfo implements IMethodAspect {
    ctx: Context;
    afterReturn(point: JoinPoint, result: any): Promise<{
        code: any;
        success: any;
        status: number;
        message: any;
        data: any;
    }>;
}
