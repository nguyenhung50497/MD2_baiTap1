import {Library} from './Library'

export class Magazine extends Library {
    private releaseAmount: number;
    private releaseMonth: number;

    constructor(name: string) {
        super(name);
    }
}