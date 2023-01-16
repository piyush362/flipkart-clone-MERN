import { products } from './constants/data.js'
import Product from './models/product-schema.js';

const DefaultData = async () => {
    try {
        // await Product.deleteMany({});
        await Product.insertMany(products);
        console.log('data imported sucessfully...')
    } catch (error) {
        console.log("Error while insering default data", error.message);
    }
}

export default DefaultData;