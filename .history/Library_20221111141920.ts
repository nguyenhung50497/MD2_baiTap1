export class Library {
    private code: number;
    private publishingCompany: string;
    private releaseNumber: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number) {
        this.code = code;
        this.publishingCompany = publishingCompany;
        this.releaseNumber = releaseNumber;
    }

    public getCode(): number {
        return this.code;
    }
    public getPublishingCompany(): string {
        return this.publishingCompany;
        
}