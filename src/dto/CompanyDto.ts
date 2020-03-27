import { RunTimeValidator } from "../utils/RunTimeValidator";
import { DocType } from "../enums/DocType";

const setString = RunTimeValidator.setString;
const setNumber = RunTimeValidator.setNumber;

export class CompanyDto {
    private identifier: string;
    private readonly docType: DocType = DocType.Company;
    
    private companyCRN: number;
    private companyName: string;
    private location: string;
    private organisationRole: string;
    private createdAt: Date;
    private updatedAt: Date;

    constructor(companyDto) {
        this.identifier = setString(companyDto.identifier);
        
        if(companyDto.companyCRN) {
            this.companyCRN = setNumber(companyDto.companyCRN);
        }

        if(companyDto.companyName) {
            this.companyName = setString(companyDto.companyName);
        }

        if(companyDto.location) {
            this.location = setString(companyDto.location);
        }

        if(companyDto.organisationRole) {
            this.organisationRole = setString(companyDto.organisationRole);
        }

        if(companyDto.createdAt) {
            this.createdAt = new Date(companyDto.createdAt);
        }

        if(companyDto.updatedAt) {
            this.updatedAt = new Date(companyDto.updatedAt);
        }
    }


    /**
     * Getter $identifier
     * @return {string}
     */
	public get $identifier(): string {
		return this.identifier;
	}

    /**
     * Setter $identifier
     * @param {string} value
     */
	public set $identifier(value: string) {
		this.identifier = value;
	}

    /**
     * Getter $createdAt
     * @return {Date}
     */
	public get $createdAt(): Date {
		return this.createdAt;
	}

    /**
     * Getter $updatedAt
     * @return {Date}
     */
	public get $updatedAt(): Date {
		return this.updatedAt;
	}

    /**
     * Setter $createdAt
     * @param {Date} value
     */
	public set $createdAt(value: Date) {
		this.createdAt = value;
	}

    /**
     * Setter $updatedAt
     * @param {Date} value
     */
	public set $updatedAt(value: Date) {
		this.updatedAt = value;
	}

    /**
     * Getter $companyCRN
     * @return {number}
     */
	public get $companyCRN(): number {
		return this.companyCRN;
	}

    /**
     * Getter $companyName
     * @return {string}
     */
	public get $companyName(): string {
		return this.companyName;
	}

    /**
     * Getter $location
     * @return {string}
     */
	public get $location(): string {
		return this.location;
	}

    /**
     * Getter $organisationRole
     * @return {string}
     */
	public get $organisationRole(): string {
		return this.organisationRole;
	}

    /**
     * Setter $companyCRN
     * @param {number} value
     */
	public set $companyCRN(value: number) {
		this.companyCRN = value;
	}

    /**
     * Setter $companyName
     * @param {string} value
     */
	public set $companyName(value: string) {
		this.companyName = value;
	}

    /**
     * Setter $location
     * @param {string} value
     */
	public set $location(value: string) {
		this.location = value;
	}

    /**
     * Setter $organisationRole
     * @param {string} value
     */
	public set $organisationRole(value: string) {
		this.organisationRole = value;
	}

    
}