export default class RatingData{
    poor: number;
    average: number;
    great: number;
    color: string;

    constructor(p:number, a:number, g:number, b:string){
        this.poor = p;
        this.average = a;
        this.great = g;
        this.color=b;
    }

}