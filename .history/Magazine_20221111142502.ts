import {Library} from './Library'

export class Magazine extends Library {
    private releaseAmount: number;
    private releaseMonth: number;

    constructor(code: number, publishingCompany: string, releaseNumber: number, releaseAmount: number, releaseMonth: number) {
        super(code, publishingCompany, releaseNumber, releaseAmount, releaseMonth);
        this.releaseAmount = releaseAmount;
    }
}