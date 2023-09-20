import  express  from "express";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import userRoute from './src/routes/userRoute.js';
import publicRoute from './src/routes/publicRoute.js';
import departmentsRoute from './src/routes/departmentsRoute.js';
import projectRoutes from './src/routes/projectRoutes.js';
import taskRoutes from './src/routes/taskRoutes.js';
import assignTaskRoutes from './src/routes/assignTaskRoutes.js';
import mongoose from "mongoose";
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
dotenv.config()

//public route .. 
app.use('/', publicRoute);
//user all route
app.use('/users', userRoute);
app.use('/departments', departmentsRoute);
//project route 
app.use('/projects', projectRoutes);
app.use('/task',taskRoutes);
app.use('/assigntask',assignTaskRoutes)


const connectDB = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`DB Is Connected`);
    }
    catch(err){
        console.log(`databash conn error ${err} conn api`);
        process.exit(1);
    }
}

app.listen(process.env.PORT, async ()=>{
    console.log(`server is runnig port on : http://localhost:${process.env.PORT}`);
    await connectDB();
});




