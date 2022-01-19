import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload { 
    sub: string
}

export async function ensureAuthenticateDeliveryman(
    request: Request,
    reponse: Response,
    next: NextFunction
) {

    const tokenAuth = request.headers.authorization;

    if(!tokenAuth) {
        return reponse.status(400).json('Token missing')
    }

    const [, token] = tokenAuth.split(" ");

    try {

        const { sub } = verify(token,'ee6442bc64252c123cbe8978e7f3a97c') as IPayload;

        request.id_deliveryman = sub;

        return next()
    }catch (err) {
        return reponse.status(401).json("Unauthorized")
    }
}