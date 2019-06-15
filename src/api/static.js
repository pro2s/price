import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import Lace1 from '../images/shoelaces-1.jpg'
import Lace2 from '../images/shoelaces-2.jpg'
import Lace3 from '../images/shoelaces-3.jpg'
import Insole1 from '../images/shoeinsoles-1.jpg'
import Insole2 from '../images/shoeinsoles-2.jpg'
import Insole3 from '../images/shoeinsoles-3.jpg'

const FAKE_DESCRIPTION = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.";
const complex = {
    count: {
        1: 1.5,
        2: 2
    },
    filter: {
        id: 1,
        field: 'type',
        value: 'lace',
        filter: {
            id: 1,
            field: 'brand',
            value: '*'
        }
    }
}
const baseShoe = { desc: FAKE_DESCRIPTION, type: 'shoe' }
const products = [
    { id: 1, title: 'Winter body', price: 110, img: Item1, brand: 'Adidas', complex, ...baseShoe },
    { id: 2, title: 'Adidas', price: 80, img: Item2, brand: 'Adidas', ...baseShoe },
    { id: 3, title: 'Vans', price: 120, img: Item3, brand: 'Vans', ...baseShoe },
    { id: 4, title: 'White', price: 260, img: Item4, brand: 'Vans', ...baseShoe },
    { id: 5, title: 'Cropped-sho', price: 160, img: Item5, brand: 'Crocs', ...baseShoe },
    { id: 6, title: 'Blues', price: 90, img: Item6, brand: 'Crocs', ...baseShoe },
    { id: 7, title: 'Shoe synthetic lace', desc: FAKE_DESCRIPTION, price: 10, img: Lace1, type: 'lace' },
    { id: 8, title: 'Shoe natural lace', desc: FAKE_DESCRIPTION, price: 10, img: Lace2, type: 'lace' },
    { id: 9, title: 'Shoe leather lace', desc: FAKE_DESCRIPTION, price: 10, img: Lace3, type: 'lace' },
    { id: 10, title: 'Shoe synthetic insole', desc: FAKE_DESCRIPTION, price: 5, img: Insole1, type: 'insole' },
    { id: 11, title: 'Shoe natural insole', desc: FAKE_DESCRIPTION, price: 5, img: Insole2, type: 'insole' },
    { id: 12, title: 'Shoe leather insole', desc: FAKE_DESCRIPTION, price: 5, img: Insole3, type: 'insole' },
]
class Api {
    fetchProducts() {
        return products
    }
}

export default Api