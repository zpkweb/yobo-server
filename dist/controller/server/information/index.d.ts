import { ServiceInformation } from "../../../service/information/index";
export declare class adminInformatinController {
    serviceInformation: ServiceInformation;
    pagination: any;
    createInformation(createBody: any): Promise<any>;
    informationList(findParams: any): Promise<any>;
}
