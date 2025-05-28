const express=require('express');
const app= express();
const userRouter=require('./controller/userController');

app.use(express.json());

app.use('/users',userRouter);

const PORT = 3000;