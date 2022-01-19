import { prisma } from "../../../../database/prismaClient";





export class ListAllDeliveriesUseCase {

    async execute(id_client: string) {
        const listAll = await prisma.client.findMany({
            where: {
                id: id_client
            },
            select: {
                delivery: true
            }

        })

        return listAll;
    }

}