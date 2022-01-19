import { Request, Response } from "express";
import { ListAllUseCase } from "./ListAllUseCase";





export class ListAllController  {

    async handle(request:Request, response: Response) {
        const { id_deliveryman } = request;

        const listAllUseCase = new ListAllUseCase();

        const result = await listAllUseCase.execute(id_deliveryman);


        return response.json(result);
    }

}