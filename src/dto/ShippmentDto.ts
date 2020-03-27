import { CompanyDto } from "./CompanyDto";
import { DrugDto } from "./DrugDto";
import { DocType } from "../enums/DocType";
import { RunTimeValidator } from "../utils/RunTimeValidator";

const setString = RunTimeValidator.setString;
const setNumber = RunTimeValidator.setNumber;

export class ShippmentDto {
    private identifier: string;
    private readonly docType: DocType = DocType.Shippment;
    
    private buyer: CompanyDto;
    private drug: DrugDto;
    private listOfAssets: string[];
    private transporter: CompanyDto;

    constructor(shippmentDto) {
        this.identifier = setString(shippmentDto.identifier);
        if(shippmentDto.buyer) {
            this.buyer = new CompanyDto(shippmentDto.buyer);
        }

        if(shippmentDto.drug) {
            this.drug = new DrugDto(shippmentDto.drug);
        }

        if(shippmentDto.listOfAssets) {
            let listOfAssets = [];
            for(const asset of shippmentDto.listOfAssets) {
                listOfAssets.push(asset);
            }
            this.listOfAssets = listOfAssets;
        }

        if(shippmentDto.transporter) {
            this.transporter = new CompanyDto(shippmentDto.transporter);
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
     * Getter $buyer
     * @return {CompanyDto}
     */
	public get $buyer(): CompanyDto {
		return this.buyer;
	}

    /**
     * Getter $drug
     * @return {DrugDto}
     */
	public get $drug(): DrugDto {
		return this.drug;
	}

    /**
     * Getter $listOfAssets
     * @return {string[]}
     */
	public get $listOfAssets(): string[] {
		return this.listOfAssets;
	}

    /**
     * Getter $transporter
     * @return {CompanyDto}
     */
	public get $transporter(): CompanyDto {
		return this.transporter;
	}

    /**
     * Setter $buyer
     * @param {CompanyDto} value
     */
	public set $buyer(value: CompanyDto) {
		this.buyer = value;
	}

    /**
     * Setter $drug
     * @param {DrugDto} value
     */
	public set $drug(value: DrugDto) {
		this.drug = value;
	}

    /**
     * Setter $listOfAssets
     * @param {string[]} value
     */
	public set $listOfAssets(value: string[]) {
		this.listOfAssets = value;
	}

    /**
     * Setter $transporter
     * @param {CompanyDto} value
     */
	public set $transporter(value: CompanyDto) {
		this.transporter = value;
	}

}