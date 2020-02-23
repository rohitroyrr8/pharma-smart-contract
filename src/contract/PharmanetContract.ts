import {Context, Contract} from 'fabric-contract-api';

import log4js = require('log4js');
import { CompanyDto } from '../dto/CompanyDto';
import { CompanyService } from '../services/CompanyService';
import { DrugService } from '../services/DrugService';
import { PurchasingOrderService } from '../services/PurchasingOrderService';

const logger = log4js.getLogger('PharmaNet SmartContract');

export class PharmaNetContext extends Context {
    constructor() {
        super();
    }
}
export class PharmanetContract extends Contract {
    constructor() {
        // Provide a custom name to refer to this smart contract
        super('org.pharma-network.pharmanet');
        // global.manufacturerOrg = 'manufacturer.pharma-network.com';
        // global.distributorOrg = 'distriburtor.pharma-network.com';
        // global.retailerOrg = 'retailer.pharma-network.com';
        // global.transporterOrg = 'transporter.pharma-network.com';
    }

    async instantiate(ctx) {
        console.log('Pharmanet Smart Contract instantiated.');
    }
    public createContext(){
        return new PharmaNetContext();
    }

    public async registerCompany(ctx: PharmaNetContext, companyDto: string) {
        return (new CompanyService().registerCompany(ctx, companyDto));
    }

    public async addDrug(ctx: PharmaNetContext, drugStr: string) {
        return (new DrugService().addDrug(ctx, drugStr));
    }

    public async retailDrug(ctx: PharmaNetContext, drugStr: string) {
        return (new DrugService().retailDrug(ctx, drugStr));
    }

    public async getDrug(ctx: PharmaNetContext, drugStr: string) {
        return (new DrugService().getDrugCurrentState(ctx, drugStr));
    }

    public async viewHistory(ctx: PharmaNetContext, drugStr: string) {
        return (new DrugService().getDrugCurrentState(ctx, drugStr));
    }

    public async createPO(ctx: PharmaNetContext, purchasingOrderStr: string) {
        return (new PurchasingOrderService().createPO(ctx, purchasingOrderStr));
    }

    public async createShippment(ctx: PharmaNetContext, shippmentDto) {
        return (new s)
    }
}