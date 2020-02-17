import { Context } from "fabric-contract-api";
import {expect} from 'chai'
import {ChaincodeStub, ClientIdentity} from 'fabric-shim';
import * as sinon from 'sinon';

import log4js = require('log4js');

const logger = log4js.getLogger('Pharmanet Test')

class PharmanetContext implements Context {
    logging;
    public stub: ChaincodeStub = sinon.createChaincodeStub(ChaincodeStub);
    public clientIdentity: ClientIdentity = sinon.createIdentity(ClientIdentity);
    
}