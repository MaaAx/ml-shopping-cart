import {
    getters
} from '@/store';
import { fakeProduct, fakeState } from '../mocks';


describe('countItemsInCart', () => {
    const state = fakeState;


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