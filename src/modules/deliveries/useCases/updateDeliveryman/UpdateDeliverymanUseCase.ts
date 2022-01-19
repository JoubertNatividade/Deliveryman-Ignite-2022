import { prisma } from "../../../../database/prismaClient";

interface IUpdateDTO {
    id_delivery: string;
    id_deliveryman: string
}


export class UpdateDeliverymanUseCase {
    async execute({id_delivery, id_deliveryman}:IUpdateDTO) {
        const result = await prisma.delivery.updateMany({
            where: {
                id: id_delivery,
                id_deliveryman: null
            },
            data: {
                id_deliveryman
            }
        })

        return result;
    }
}