import { Context } from "fabric-contract-api";
import {expect} from 'chai'
import * as sinon from 'sinon';
import {ChaincodeStub, ClientIdentity} from 'fabric-shim';
import {EncryptionUtil} from '../../src/utils/EncryptionUtil';

import log4js = require('log4js');

const logger = log4js.getLogger('Pharmanet Test');

describe('Testing utils function', () => {
    describe('checking encrypion function', () => {
        it('checking encrypt adn decryption for string', async() => {
            
            const dummyString: string = "Dummy String";
            const encryptString: string = await EncryptionUtil.encryptString(dummyString);
            const decryptString: string = await EncryptionUtil.decryptString(encryptString);
            
            expect(dummyString).eql(decryptString);
        });
    });

    describe('checking encrypion function', () => {
        it('checking encrypt and decryption for number', async() => {
            
            const dummy: number = 234;
            const encrypted: string = await EncryptionUtil.encryptNumber(dummy);
            const decrypted: number = await EncryptionUtil.decryptNumber(encrypted);
            
            expect(dummy).eql(decrypted);
        });
    });

    describe('checking encrypion function', () => {
        it('checking encrypt and decryption for date', async() => {
            
            const dummy: Date = new Date('2011-02-01');
            const encrypted: string = await EncryptionUtil.encryptDate(dummy);
            const decrypted: Date = await EncryptionUtil.decryptDate(encrypted);
            
            expect(dummy).eql(decrypted);
        });
    });

    describe('checking encrypion function', () => {
        it('checking encrypt and decryption for null', async() => {
            
            const dummy: string  = undefined;
            const encrypted: string = await EncryptionUtil.encryptString(dummy);
            const decrypted: string = await EncryptionUtil.decryptString(encrypted);
            
            expect(dummy).eql(decrypted);
        });
    });
});