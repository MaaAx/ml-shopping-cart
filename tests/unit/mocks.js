export const fakeProduct = (id) => {
    let product = new Object();
    product.id = id;
    product.name = 'name';
    product.desc = 'desc';
    product.img = 'img';
    return product;
}