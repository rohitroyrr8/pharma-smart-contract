import { PharmaNetContext } from "../contract/PharmanetContract";
import { CompanyDto } from "../dto/CompanyDto";

import log4js = require('log4js');
import { SupplyChainResponse } from "../models/SupplyChainResponse";
import { Messages } from "../utils/Messages";
import { CommonUtil } from "../utils/CommonUtil";
import { DocType } from "../enums/DocType";

const logger = log4js.getLogger('Pharmanet');
export class CompanyService {

    /**
     * 
     * @param ctx 
     * @param companyDto 
     */
    public async registerCompany(ctx: PharmaNetContext, companyStr: string) : Promise<SupplyChainResponse>{
        let supplyChainResponse: SupplyChainResponse;
        try {
            let companyDto: CompanyDto = new CompanyDto(JSON.parse(companyStr));
            let response = await this.validateCompanyDto(companyDto);
            if(response) {
                return response;
            }
            let companyCompositeKey: string = null;
            companyCompositeKey = await CommonUtil.createCompositeKey(DocType.Company, companyDto.$companyCRN.toString(), companyDto.$companyName);

            companyDto.$createdAt = new Date();
            companyDto.$updatedAt = new Date();

            await ctx.stub.putState(companyCompositeKey, Buffer.from(JSON.stringify(companyDto)));

            return new SupplyChainResponse(200, 'Company registered successfully.');
        } catch(error) {
           logger.error(error);
           return new SupplyChainResponse(500, Messages.E002, error);
        }
    }

    public async validateCompanyDto(companyDto: CompanyDto): Promise<SupplyChainResponse> {
        let remarks: string[] = [];
        if(!companyDto.$companyCRN) {
            return new SupplyChainResponse(422, 'company CRN '.concat(Messages.E000));
        }

        if(!companyDto.$companyName) {
            return new SupplyChainResponse(422, 'company name '.concat(Messages.E000));
        }

        if(!companyDto.$location) {
            return new SupplyChainResponse(422, 'company location'.concat(Messages.E000));
        }

        if(!companyDto.$organisationRole) {
            return new SupplyChainResponse(422, 'organisation role '.concat(Messages.E000));
        }

        return null;
    }
}