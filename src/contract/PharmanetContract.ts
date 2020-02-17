export class PharmanetContract extends Contract {
    constructor() {
        // Provide a custom name to refer to this smart contract
        super('org.pharma-network.pharmanet');
        global.manufacturerOrg = 'manufacturer.pharma-network.com';
        global.distributorOrg = 'distriburtor.pharma-network.com';
        global.retailerOrg = 'retailer.pharma-network.com';
        global.transporterOrg = 'transporter.pharma-network.com';
    }
}