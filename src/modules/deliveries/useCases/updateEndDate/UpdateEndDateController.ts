import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./UpadateEndDateUseCase";




export class UpdateEndDateController {

    async handle(request: Request, response: Response) {
        const { id_deliveryman } = request;
        const { id: id_delivey } = request.params;

        const updateEndDateUseCase = new UpdateEndDateUseCase();

        const result = await updateEndDateUseCase.execute({id_deliveryman, id_delivey});

        return response.json(result)
    }

}