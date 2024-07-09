import express from 'express';
const app = express();
 
import { AdminRoute, VendorRoute } from './routes'

app.use('/admin', AdminRoute);
app.use('/vendor', VendorRoute);


//server connection
app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})