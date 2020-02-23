import { PharmaNetContext } from "../contract/PharmanetContract";
import log4js = require('log4js');
import { SupplyChainResponse } from "../models/SupplyChainResponse";
import { Messages } from "../utils/Messages";
import { DrugDto } from "../dto/DrugDto";
import { CommonUtil } from "../utils/CommonUtil";
const logger = log4js.getLogger('Pharmanet');

export class DrugService {
    public async addDrug(ctx: PharmaNetContext, drugStr: string) {
        try {
            let drug: DrugDto = new DrugDto(JSON.parse(drugStr));
            
            let result: any = await this.validDrugDto(drug);
            if(!result.isValid) {
                return new SupplyChainResponse(422, Messages.E004, result.remarks)
            }

            let productCompositeKey: string = null;
            let manufacturerCompositeKey: string = null;

            productCompositeKey = await CommonUtil.createCompositeKey(drug.$drugName, drug.$serialNo);
            manufacturerCompositeKey = await CommonUtil.createCompositeKey(drug.$company.$companyCRN.toString());
            
            drug.$productId = productCompositeKey;
            drug.$manufacturer = manufacturerCompositeKey;
            drug.$owner = manufacturerCompositeKey;
            drug.$shippment = [];
            drug.$createdAt = new Date();
            drug.$updatedAt = new Date();

            await ctx.stub.putState(productCompositeKey, Buffer.from(JSON.stringify(drug)));

            return new SupplyChainResponse(200, 'Drug added.');
        } catch(error) {
            logger.error(error);
            return new SupplyChainResponse(500, Messages.E002, error)
        }
    }

    public async retailDrug(ctx: PharmaNetContext, drug: string) {
        return null;
    }

    public async viewHistory(ctx: PharmaNetContext, drug: string) {
        return null;
    }

    public async getDrugCurrentState(ctx: PharmaNetContext, drugStr: string) {
        try {
            let drug: DrugDto = new DrugDto(JSON.parse(drugStr));

            if(!drug.$serialNo) {
                return new SupplyChainResponse(422, 'Serial No. '.concat(Messages.E000));
            }

            if(!drug.$drugName) {
                return new SupplyChainResponse(422, 'Drug Name '.concat(Messages.E000));
            }

            const productCompositeKey = await CommonUtil.createCompositeKey(drug.$drugName, drug.$serialNo);

            let productBuffer = await ctx.stub.getState(productCompositeKey);
            if(!productBuffer || productBuffer.length <=0 ) {
                throw new RangeError('Invalid Drug name or Serial no.');
            }
            return (new DrugDto(JSON.parse(productBuffer.toString())));
        } catch(error) {
            if(error instanceof RangeError) {
                return new SupplyChainResponse(422, error.message);
            }
            logger.error(error);
            return new SupplyChainResponse(500, Messages.E002, error);
        }
    }

    public async validDrugDto(drug: DrugDto): Promise<any> {
        let result: any = {};
        result.isValid = true;
        result.remarks = [];

        let remarks: string[];

        if(!drug.$drugName) {
            result.isValid = false;
            remarks.push('Drug Name '.concat(Messages.E000));
        }

        if(!drug.$serialNo) {
            result.isValid = false;
            remarks.push('Serial No. '.concat(Messages.E000));
        }

        if(!drug.$manufacturerDate) {
            result.isValid = false;
            remarks.push('Manufacturer Date '.concat(Messages.E000));
        }

        if(!drug.$expiryDate) {
            result.isValid = false;
            remarks.push('Expiry Date '.concat(Messages.E000));
        }

        if(!drug.$company.$companyCRN) {
            result.isValid = false;
            remarks.push('Company CRN . '.concat(Messages.E000));
        }

        result.remarks = remarks;
        return result;
    }
}