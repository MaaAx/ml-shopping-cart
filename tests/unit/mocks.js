export const fakeProduct = (id) => {
    let product = new Object();
    product.id = id;
    product.name = 'name';
    product.description = 'description';
    product.img = 'img';
    return product;
}

export const fakeState = {
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
}