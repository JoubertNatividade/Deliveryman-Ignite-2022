import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./AuthenticateDeliverymanUseCase";




export class AuthenticateDeliverymanController {

    async handle(request: Request, response: Response) {
        const { name, password  } = request.body;


        const authenticateDeliverymanUseCase = new AuthenticateDeliverymanUseCase();

        const  result = await authenticateDeliverymanUseCase.execute(name, password);


        return response.status(201).json(result)

    }

}