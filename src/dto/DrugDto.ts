import { CompanyDto } from "./CompanyDto";

export class DrugDto {
    private drugName: string;
    private serialNo: string;
    private manufacturerDate: Date;
    private expiryDate: Date;
    
    private company: CompanyDto;
    private customerAadhar: number;

    constructor(drugDto) {
        if(drugDto.drugName) {
            this.drugName = drugDto.drugName;
        }

        if(drugDto.serialNo) {
            this.serialNo = drugDto.serialNo;
        }

        if(drugDto.manufacturerDate) {
            this.manufacturerDate = drugDto.manufacturerDate;
        }

        if(drugDto.expiryDate) {
            this.expiryDate = drugDto.expiryDate;
        }

        if(drugDto.companyCRN) {
            this.company = new CompanyDto(drugDto.company);
        }

        if(drugDto.customerAadhar) {
            this.customerAadhar = drugDto.customerAadhar;
        }
    }


    /**
     * Getter $drugName
     * @return {string}
     */
	public get $drugName(): string {
		return this.drugName;
	}

    /**
     * Getter $serialNo
     * @return {string}
     */
	public get $serialNo(): string {
		return this.serialNo;
	}

    /**
     * Getter $manufacturerDate
     * @return {Date}
     */
	public get $manufacturerDate(): Date {
		return this.manufacturerDate;
	}

    /**
     * Getter $expiryDate
     * @return {Date}
     */
	public get $expiryDate(): Date {
		return this.expiryDate;
	}

    /**
     * Getter $company
     * @return {CompanyDto}
     */
	public get $company(): CompanyDto {
		return this.company;
	}

    /**
     * Getter $customerAadhar
     * @return {number}
     */
	public get $customerAadhar(): number {
		return this.customerAadhar;
	}

    /**
     * Setter $drugName
     * @param {string} value
     */
	public set $drugName(value: string) {
		this.drugName = value;
	}

    /**
     * Setter $serialNo
     * @param {string} value
     */
	public set $serialNo(value: string) {
		this.serialNo = value;
	}

    /**
     * Setter $manufacturerDate
     * @param {Date} value
     */
	public set $manufacturerDate(value: Date) {
		this.manufacturerDate = value;
	}

    /**
     * Setter $expiryDate
     * @param {Date} value
     */
	public set $expiryDate(value: Date) {
		this.expiryDate = value;
	}

    /**
     * Setter $company
     * @param {CompanyDto} value
     */
	public set $company(value: CompanyDto) {
		this.company = value;
	}

    /**
     * Setter $customerAadhar
     * @param {number} value
     */
	public set $customerAadhar(value: number) {
		this.customerAadhar = value;
	}

}