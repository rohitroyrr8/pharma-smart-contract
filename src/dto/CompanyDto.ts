export class CompanyDto {
    private companyCRN: number;
    private companyName: string;
    private location: string;
    private organisationRole: string;

    constructor(companyDto) {
        if(companyDto.companyCRN) {
            this.companyCRN = companyDto.companyCRN;
        }

        if(companyDto.companyName) {
            this.companyName = companyDto.companyName;
        }

        if(companyDto.location) {
            this.location = companyDto.location;
        }

        if(companyDto.organisationRole) {
            this.organisationRole = companyDto.organisationRole;
        }
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