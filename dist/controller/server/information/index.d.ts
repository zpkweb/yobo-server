import { ServiceInformation } from "../../../service/information/index";
export declare class adminInformatinController {
    serviceInformation: ServiceInformation;
    pagination: any;
    createInformation(createBody: any): Promise<any>;
    informationList(findParams: any): Promise<any>;
    informationEdit(editQuery: any): Promise<any>;
    updateInformation(updateBody: any): Promise<any>;
    searchInformation(searchQuery: any): Promise<any>;
    deleteInformation(query: any): Promise<{
        success: boolean;
        code: number;
    }>;
}
