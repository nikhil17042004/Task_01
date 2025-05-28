const express=require('express');
const app= express();
const userRouter=require('./controller/userController');

app.use(express.json());

app.use('/users',userRouter);

const PORT = 3000;

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:${PORT};")
});