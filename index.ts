import express from 'express';
const app = express();



app.use('/', (req,res) => {
    return res.json('Hello from the backend..')
});

//server connection
app.listen(5000, () => {
    console.log('Server listening on port 5000...')
})