import express from 'express';
const app = express();
import mongoose from 'mongoose';

import bodyParser from 'body-parser';
 
import { AdminRoute, VendorRoute } from './routes'
import { MONGO_URI } from './config';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);

//connect database
mongoose.connect(MONGO_URI,{
    // useUnifiedTopology: true,
    // useCreateIndex: true
}).then( result => {
    console.log('MongoDB up and running...')
}).catch(err => {
    console.log('error' + err);
})

//server connection
app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})