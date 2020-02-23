import { CompanyDto } from "./CompanyDto";

export class DrugDto {
    private productId: string;
    private drugName: string;
    private serialNo: string;
    private manufacturerDate: Date;
    private expiryDate: Date;
    private shippment: string[];
    private manufacturer: string;
    private retailer: string;
    private owner: string;
    private createdAt: Date;
    private updatedAt: Date;
    
    private company: CompanyDto;
    private customerAadhar: string;

    constructor(drugDto) {

        this.productId = drugDto.productId;
        this.manufacturer  = drugDto.manufacturer;
        this.owner = drugDto.owner;
        this.retailer = drugDto.retailer;
        
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

        if(drugDto.shippment) {
            let shippment = [];
            for(const element of drugDto.shippment) {
                shippment.push(element);
            }
            this.shippment = shippment;
        }

        if(drugDto.createdAt) {
            this.createdAt = new Date(drugDto.createdAt);
        }

        if(drugDto.updatedAt) {
            this.updatedAt = new Date(drugDto.updatedAt);
        }
    }


    /**
     * Getter $retailer
     * @return {string}
     */
	public get $retailer(): string {
		return this.retailer;
	}

    /**
     * Setter $retailer
     * @param {string} value
     */
	public set $retailer(value: string) {
		this.retailer = value;
	}

    /**
     * Getter $productId
     * @return {string}
     */
	public get $productId(): string {
		return this.productId;
	}

    /**
     * Getter $shippment
     * @return {string[]}
     */
	public get $shippment(): string[] {
		return this.shippment;
	}

    /**
     * Getter $manufacturer
     * @return {string}
     */
	public get $manufacturer(): string {
		return this.manufacturer;
	}

    /**
     * Getter $owner
     * @return {string}
     */
	public get $owner(): string {
		return this.owner;
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
     * Setter $productId
     * @param {string} value
     */
	public set $productId(value: string) {
		this.productId = value;
	}

    /**
     * Setter $shippment
     * @param {string[]} value
     */
	public set $shippment(value: string[]) {
		this.shippment = value;
	}

    /**
     * Setter $manufacturer
     * @param {string} value
     */
	public set $manufacturer(value: string) {
		this.manufacturer = value;
	}

    /**
     * Setter $owner
     * @param {string} value
     */
	public set $owner(value: string) {
		this.owner = value;
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
	public get $customerAadhar(): string {
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
	public set $customerAadhar(value: string) {
		this.customerAadhar = value;
	}

}