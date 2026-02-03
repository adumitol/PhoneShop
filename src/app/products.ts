export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    providerId: number; // Nueva propiedad
}

export const products: Product[] = [
    {
        id: 1,
        name: 'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        providerId: 101
    },
    {
        id: 2,
        name: 'Phone Mini',
        price: 699,
        description: 'A great phone with one of the best cameras',
        providerId: 102
    },
    {
        id: 3,
        name: 'Phone Standard',
        price: 299,
        description: '',
        providerId: 101
    }
];