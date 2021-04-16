import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
export declare class ContainerConfiguration implements ILifeCycle {
    onReady(container: IMidwayContainer): Promise<void>;
}
