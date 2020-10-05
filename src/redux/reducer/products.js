import { normalizedProducts } from '../../fixtures';

const toObjProducts = normalizedProducts.reduce(
    (acc, product) => ({...acc, [product.id]: product}), {}
);

export default (products = toObjProducts, action) => {
    const { type } = action;
    
    switch (type) {
        default:
            return products;
    }

}