export class Item{
    code:number;
    name: string;
    quantity:number;
    price:number;

    constructor(code:number, name: string, quantity:number, price:number) {
        this.code = code;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}