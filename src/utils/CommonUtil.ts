import { MessageUtil } from "./MessageUtil";

export class CommonUtil {
    public static async createCompositeKey(...args: string[]): Promise<string> {
        if(args === null || args.length == 0) {
            throw new Error(MessageUtil.E001);
        }

        let compositeKey = args[0];
        for(let i=1; 1< args.length; i++) {
        compositeKey =  compositeKey.concat('_').concat(args[i]);
        }
        return compositeKey;
    }
    
    public static async createDateString(date: Date): Promise<string>{
        if(!date || date === null) {
            throw new Error('date '.concat(MessageUtil.E000));
        }
        const dateValue: Date = new Date(date);
        const dateStr: string = ('0'+dateValue.getDate().toString()).slice(-2);
        const monthStr: string = ('0'+(dateValue.getMonth()+1).toString()).slice(-2);
        const yearStr:string = dateValue.getFullYear().toString();

        return dateStr.concat('/').concat(monthStr).concat('/').concat(yearStr);
    }

    public static async getUTCTime(date: Date): Promise<number> {
        if(!date) {
            throw new Error('date '.concat(MessageUtil.E000));
        }

        const UTCDate: Date = new Date(date);
        UTCDate.setUTCHours(0, 0, 0, 0);

        return UTCDate.getTime();
    }
}