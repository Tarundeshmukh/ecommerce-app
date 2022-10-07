export interface Product {
    id:number;
    name:string;
    price:number;
    description:string;
}

export const products = [
    {
        id:1,
        name:'iPhone 14 Pro',
        price:135000,
        description:'A great phone with the best cameras.'
    },
    {
        id:2,
        name:'Nothing Phone',
        price:35999,
        description:'A phone with new design and powered with android.'
    },
    {
        id:3,
        name:'OnePlus 10',
        price:80000,
        description:'A phone with powerhouse battery.'
    }
];