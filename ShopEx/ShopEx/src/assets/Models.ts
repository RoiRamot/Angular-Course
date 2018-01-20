import { Url } from 'url';

export class Product {
    id: number;
    categoryName: string;
    image: string;
    title: string;
    price: number;
    description: String;
}

export class Category {
    constructor(public id: Number, public title: string, public image: string) { }
}

export class SocialMenuItem {
    constructor(public image: string, public link: string) {

    }
}
