import { ILifeCycle, IMidwayContainer } from '@midwayjs/core';
import { IdentityListService } from "./service/user/identityList";
export declare class ContainerConfiguration implements ILifeCycle {
    identityListService: IdentityListService;
    onReady(container: IMidwayContainer): Promise<void>;
}
