export class SupplyChainResponse {
    private status: number;
    private message: string;
    private errors: any;
    private data: any;
    
    constructor(status?:number, message?: string, errors?: any, data?: any) {
        this.status = status;
        this.message = message;
        this.errors = errors;
        this.data = data;
    }


    /**
     * Getter $status
     * @return {number}
     */
	public get $status(): number {
		return this.status;
	}

    /**
     * Getter $message
     * @return {string}
     */
	public get $message(): string {
		return this.message;
	}

    /**
     * Getter $errors
     * @return {any}
     */
	public get $errors(): any {
		return this.errors;
	}

    /**
     * Getter $data
     * @return {any}
     */
	public get $data(): any {
		return this.data;
	}

    /**
     * Setter $status
     * @param {number} value
     */
	public set $status(value: number) {
		this.status = value;
	}

    /**
     * Setter $message
     * @param {string} value
     */
	public set $message(value: string) {
		this.message = value;
	}

    /**
     * Setter $errors
     * @param {any} value
     */
	public set $errors(value: any) {
		this.errors = value;
	}

    /**
     * Setter $data
     * @param {any} value
     */
	public set $data(value: any) {
		this.data = value;
	}

}