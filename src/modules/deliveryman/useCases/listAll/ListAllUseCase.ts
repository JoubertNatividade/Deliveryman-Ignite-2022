import { prisma } from "../../../../database/prismaClient";



export class ListAllUseCase { 

    async execute(id_deliveryman: string) { 

        const result = await prisma.deliveryman.findMany({
            where: {
                id: id_deliveryman
            }, 
            select: {
                name: true,
                delivery: true,
            }
        })

        return result;
    }

}