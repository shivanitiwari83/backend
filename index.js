const express = require('express');
const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/util');
const filterRouter=require('./routers/FilterRouter')

const cors = require('cors');

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}))

// middleware
app.use('/user', userRouter);
app.use('/util', utilRouter);
app.use('/filter',filterRouter);

app.use(express.static('./static/uploads'))



//starting the server
app.listen(port, () => {
    console.log(' express server started...');

});