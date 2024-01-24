import { Response } from "express";

export default class Res {
    
    public static send(res: Response,statusCode : number, message: string,  data?:unknown){
        res.statusCode = statusCode;
        res.statusMessage = message;
        res.json(data);
    }
}