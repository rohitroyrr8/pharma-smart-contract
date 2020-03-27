import * as crypto from 'crypto';
const log4js  = require('log4js');

const logger = log4js.getLogger('EncryptionUtils');
const EncryptionAlgorithm : string = 'aes256';
const EncryptionKey = 'salt_password';

export class EncryptionUtil {
    public static async encryptString(rawString: string) : Promise<string> {
        if(!rawString) { return; }

        const cipher = crypto.createCipher(EncryptionAlgorithm, EncryptionKey);
        const encrypted = cipher.update(rawString, 'utf8', 'hex') + cipher.final('hex');

        return encrypted.toString();
    }

    public static async decryptString(encryptString: string): Promise<string> {
        try {
            if(!encryptString) { return; }
            
            const dicipher = crypto.createDecipher(EncryptionAlgorithm, EncryptionKey);
            const decrypted = dicipher.update(encryptString, 'hex', 'utf8') + dicipher.final('utf8');

            return decrypted.toString();
        } catch (error) {
            logger.console.warn('Decryption Failed: '.concat(error.message));
            return encryptString;
        }
    }

    public static async encryptNumber(rawNumber: number) : Promise<string> {
        if(!rawNumber) { return; }
        return this.encryptString(rawNumber.toString());
    }

    public static async decryptNumber(encryptNumber: string) : Promise<number> {
        if(!encryptNumber) { return; }
        return Number(await this.decryptString(encryptNumber));
    }

    public static async encryptDate(rawDate: Date) : Promise<string> {
        if(!rawDate) { return; }
        return this.encryptString(rawDate.toString());
    }

    public static async decryptDate(encryptedDate: string) : Promise<Date> {
        if(!encryptedDate) { return ;}
        return new Date(await this.decryptString(encryptedDate));
    }
}