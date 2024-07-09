import express from 'express';
const app = express();

import bodyParser from 'body-parser';
 
import { AdminRoute, VendorRoute } from './routes'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);


//server connection
app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})