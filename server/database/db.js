import mongoose from 'mongoose'

export const Connection = async (usename, password) => {

    const URL = `mongodb+srv://${usename}:${password}@ecommerce-flipkart2.jadzsqg.mongodb.net/?retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("database connected succesfully...")
    } catch (error) {
        console.log("error while connecting data base", error.message);
    }
}

export default Connection;