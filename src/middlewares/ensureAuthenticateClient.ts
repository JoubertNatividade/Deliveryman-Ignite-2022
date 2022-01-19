import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";


interface IPayload { 
    sub: string
}

export async function ensureAuthenticateClient(
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

        const { sub } = verify(token,'ab7b6a5346489aad946301c8764fa6d8') as IPayload;

        request.id_client = sub;

        return next()
    }catch (err) {
        return reponse.status(401).json("Unauthorized")
    }
}