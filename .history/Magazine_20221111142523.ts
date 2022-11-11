import {Library} from './Library'

export class Magazine extends Library {
    private releaseAmount: number;
    private releaseMonth: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseAmount: number, releaseMonth: number) {
        super(code, publishingCompany, releaseNumber);
        this.releaseAmount = releaseAmount;
        this.releaseMonth = releaseMonth;
    }

    public getReleaseMonth(): number {
        return this.releaseMonth;
    }
    public getReleaseAmount(): number {
        return this.releaseAmount;
    }
    public se
}