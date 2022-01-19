import { Request, Response } from "express";
import { ListAllDeliveriesUseCase } from "./ListAllDeliveriesUseCase";



export class ListAllDeliveriesController { 

    async handle(request: Request, response: Response) {
        const { id_client } = request;

        const listAllDeliveriesUseCase = new ListAllDeliveriesUseCase();

        const result = await listAllDeliveriesUseCase.execute(id_client);

        return response.json(result)
    }

}