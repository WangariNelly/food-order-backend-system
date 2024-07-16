
import mongoose from 'mongoose';
import { MONGO_URI } from '../config';

export default async () => {
    try {
        mongoose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            // useCreateIndex: true
        })
            console.log('MongoDB up and running...')
    } catch (error) {
        console.log(error)
    }
}



