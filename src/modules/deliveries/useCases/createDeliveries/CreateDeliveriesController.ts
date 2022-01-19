import { Request, Response } from "express";
import { CreateDeliveriesUseCase } from "./CreateDeliveriesUseCase";




export class CreateDeliveriesController {


    async handle(request: Request, response: Response) {
        const { item_name } = request.body;
        const { id_client } = request;

        const createDeliveries = new CreateDeliveriesUseCase();

        const result = await createDeliveries.execute({
            id_client, 
            item_name
        })

        return response.status(201).json(result);

    }

}