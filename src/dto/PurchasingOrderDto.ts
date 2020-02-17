import { CompanyDto } from "./CompanyDto";
import { DrugDto } from "./DrugDto";

export class PurchasingOrderDto {
    private buyer: CompanyDto;
    private seller: CompanyDto;

    private drug: DrugDto;
    private quantity: number;

    constructor(purchasingOrderDto) {
        if(purchasingOrderDto.buyer) {
            this.buyer = new CompanyDto(purchasingOrderDto.buyer);
        }

        if(purchasingOrderDto.seller) {
            this.seller = new CompanyDto(purchasingOrderDto.seller);
        }

        if(purchasingOrderDto.drug) {
            this.drug = new DrugDto(purchasingOrderDto.drug);
        }

        if(purchasingOrderDto.quantity) {
            this.quantity = purchasingOrderDto.quantity;
        }
    }


    /**
     * Getter $buyer
     * @return {CompanyDto}
     */
	public get $buyer(): CompanyDto {
		return this.buyer;
	}

    /**
     * Getter $seller
     * @return {CompanyDto}
     */
	public get $seller(): CompanyDto {
		return this.seller;
	}

    /**
     * Getter $drug
     * @return {DrugDto}
     */
	public get $drug(): DrugDto {
		return this.drug;
	}

    /**
     * Getter $quantity
     * @return {number}
     */
	public get $quantity(): number {
		return this.quantity;
	}

    /**
     * Setter $buyer
     * @param {CompanyDto} value
     */
	public set $buyer(value: CompanyDto) {
		this.buyer = value;
	}

    /**
     * Setter $seller
     * @param {CompanyDto} value
     */
	public set $seller(value: CompanyDto) {
		this.seller = value;
	}

    /**
     * Setter $drug
     * @param {DrugDto} value
     */
	public set $drug(value: DrugDto) {
		this.drug = value;
	}

    /**
     * Setter $quantity
     * @param {number} value
     */
	public set $quantity(value: number) {
		this.quantity = value;
	}

}