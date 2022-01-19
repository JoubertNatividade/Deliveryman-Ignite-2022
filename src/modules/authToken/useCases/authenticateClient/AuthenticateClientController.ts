import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";






export class AuthenticateClientController { 

    async handle(request:Request, response: Response) {
        const  { name, password } = request.body;

        const authenticateClientUseCase = new AuthenticateClientUseCase();

        const reult = await authenticateClientUseCase.execute(name, password);

        return response.status(201).json(reult);
    }

}