import { prisma } from "../../../../database/prismaClient";


interface IUpdateEndDate {
    id_deliveryman: string;
    id_delivey: string
}


export class UpdateEndDateUseCase {

    async execute({ id_deliveryman, id_delivey }:IUpdateEndDate) {

        const result = await prisma.delivery.updateMany({
            where: {
                id: id_delivey,
                id_deliveryman
            },
            data: {
                end_at: new Date()
            }
        })

        return result;
    }


}