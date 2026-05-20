const express=require('express');
const logger=require('./middleware/logger');

const userRoutes=require('./routes/userRoutes');

const app=express();

app.use('/users',userRoutes);
app.use(express.json());
app.use(logger);
app.listen(3000,()=>{
    console.log("server is running")
});

