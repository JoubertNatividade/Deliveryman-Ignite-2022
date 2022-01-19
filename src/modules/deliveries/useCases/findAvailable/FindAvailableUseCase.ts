import { prisma } from "../../../../database/prismaClient";




export class FindAvailableUseCase {

    async execute() {

        const findAvailable = await prisma.delivery.findMany({
            where: {
                id_deliveryman: null,
                end_at: null
            }
        })

        return findAvailable;
    }

}