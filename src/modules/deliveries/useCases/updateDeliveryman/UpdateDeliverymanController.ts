import { Request, response, Response } from "express";
import { UpdateDeliverymanUseCase } from "./UpdateDeliverymanUseCase";


export class UpdateDeliverymanController {

    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request;
        const { id: id_delivery } = request.params;

        const updateDeliveryUseCase = new UpdateDeliverymanUseCase();

        const result = await updateDeliveryUseCase.execute({ id_delivery, id_deliveryman});

        return response.json(result);
    }

}   