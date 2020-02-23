import { PharmaNetContext } from "../contract/PharmanetContract";
import { SupplyChainResponse } from "../models/SupplyChainResponse";
import { Messages } from "../utils/Messages";

export class ShippmentService {
    
    /**
     * 
     * @param ctx 
     * @param shippmentStr 
     */
    public async createShippment(ctx: PharmaNetContext, shippmentStr: string): Promise<SupplyChainResponse> {
        try {
            
        } catch(error) {
            return new SupplyChainResponse(500, Messages.E000, null, error);
        }
    }

    /**
     * 
     * @param ctx 
     * @param shippmentStr 
     */
    public async updateShippment(ctx: PharmaNetContext, shippmentStr: string): Promise<SupplyChainResponse> {
        try {
            
        } catch(error) {
            return new SupplyChainResponse(500, Messages.E000, null, error);
        }
    }
}