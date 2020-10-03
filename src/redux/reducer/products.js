import { normalizedProducts } from '../../fixtures';

export default (products = normalizedProducts, action) => {
    const { type } = action;
    
    switch (type) {
        default:
            return products;
    }

}