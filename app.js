/*console.log("hello world");*/

import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from './routes/blog-routes';

const app=express();
app.use(express.json());


//app.use("/api/user",router);

app.use("/api/user",router);
app.use("/api/blog",blogRouter);

mongoose.connect('mongodb+srv://admin:YUfaF2UMNkuwXKc@cluster0.wgip0sl.mongodb.net/Blog?retryWrites=true&w=majority')
.then(() =>app.listen(5000)).then(() =>console.log("Connected to the database and listening to the local host on port 5000"))
.catch((err)=>console.log(err));




//YUfaF2UMNkuwXKc
