import express from 'express';
import mongoose from 'mongoose';
import router from './routes/bookRoutes.js';

const app = express();
const PORT = 8000;

/*  database connectivity */
mongoose.connect(
  "mongodb+srv://shubhamverma6351:3QeGkXZuyXZDr3ac@cluster0.sghexfv.mongodb.net/?retryWrites=true&w=majority"
).then(() => {console.log("database is connected")})
.catch(() => {console.log(err)});


/* Middleware  */

app.use(express.json());
app.use("/books", router);








/* Listening the port */
app.listen(8000, () => {
    console.log(`server is running ${PORT} port`);
})