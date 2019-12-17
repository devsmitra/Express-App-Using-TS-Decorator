import * as express from "express";

const app = express();

import './controllers/users'
import { appRouter } from "./decorators/routers";


app.use(appRouter);
app.listen(3000, ()=>{
    console.log('SERVER IS RUNNING ON 3000');
});