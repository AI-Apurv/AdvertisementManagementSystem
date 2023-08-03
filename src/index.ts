import express from 'express';
import * as dotenv from 'dotenv';
import { Connection } from './core/connection';
import router from './routes/user.routes';
import userRoutes from './routes/user.routes';
import { login } from './controller/login.controller';



const app = express();


dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
Connection.dbconnection();



app.use('/api', userRoutes); 

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
