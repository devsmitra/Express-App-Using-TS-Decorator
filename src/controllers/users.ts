import router from "../decorators/routers";
import { Request, Response } from "express";

export class Users {
    @router({
        path: '/users',
        method: 'get'
    })
    getUsers(req: Request, res:Response) {
        res.send('From GetUsers');
    }

}