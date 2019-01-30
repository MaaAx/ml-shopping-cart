import {
    getters
} from '@/store';
import { fakeProduct } from '../mocks';


describe('countItemsInCart', () => {
    const state = {
        products: [
            fakeProduct(0),
            fakeProduct(1),
            fakeProduct(2)
        ],
        cartContent: [{
            id: 0,
            qty: 5
        }, {
            id: 1,
            qty: 2
        }]
    };


    it('Counts items in cart', () => {
        const count = getters.countItemsInCart(state);
        expect(count).toBe(7);
    });


    it('Returns the product with its Id', () => {
        const id = 2;
        const product = getters.getProductById(state)(id);
        expect(product.id).toBe(2);
    });

});