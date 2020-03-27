import { Messages } from "./Messages";
import { TypeMismatchError } from "../errors/TypeMismatchError";

export class CommonUtil {
    public static async createCompositeKey(...args: string[]): Promise<string> {
        if(args === null || args.length == 0) {
            throw new Error('argument'.concat(Messages.E000));
        }

        let compositeKey = args[0];
        for(let i=1; 1< args.length; i++) {
        compositeKey =  compositeKey.concat('/').concat(args[i]);
        }
        return compositeKey;
    }
    
    public static async createDateString(date: Date): Promise<string>{
        if(!date || date === null) {
            throw new Error('date '.concat(Messages.E000));
        }
        const dateValue: Date = new Date(date);
        const dateStr: string = ('0'+dateValue.getDate().toString()).slice(-2);
        const monthStr: string = ('0'+(dateValue.getMonth()+1).toString()).slice(-2);
        const yearStr:string = dateValue.getFullYear().toString();

        return dateStr.concat('/').concat(monthStr).concat('/').concat(yearStr);
    }

    public static async getUTCTime(date: Date): Promise<number> {
        if(!date) {
            throw new Error('date '.concat(Messages.E000));
        }

        const UTCDate: Date = new Date(date);
        UTCDate.setUTCHours(0, 0, 0, 0);

        return UTCDate.getTime();
    }

    public static getHierarchyKeybyOrgnisationRole(organisationRole: string) {
        let hierarchyKey: number = null;
        switch(organisationRole){
            case 'Manufacturer' : 
                hierarchyKey = 1;
                break;
            case 'Distributor' : 
                hierarchyKey = 2;
                break;
            case 'Retailer' :
                hierarchyKey = 3;
                break;
            case 'Transporter' :
                hierarchyKey = 4;
                break;
            default :
                throw new Error('Invalid organisation role provided');
        }
        return hierarchyKey;
    }

    public static isStringNullorBlank(str: string): boolean {
        if(!str || !str.trim())
            return true;
        return false;
    }

    public static isStringNotNullorBlank(str: string): boolean{
        return !this.isStringNullorBlank(str);
    }

    public static isObjectNullorEmpty(obj: any): boolean{
        if(!obj || Object.keys(obj).length == 0) {
            return true;
        }
        return false;
    }

    public static isObjectNotNullorEmpty(obj: any): boolean {
        return !this.isObjectNullorEmpty(obj);
    }

    public static isArrayNullorEmpty(arr: any): boolean {
        return !arr || arr.length === 0;
    }

    public static isArrayNotNullorEmpty(arr: any): boolean {
        return !this.isArrayNullorEmpty(arr);
    }
}