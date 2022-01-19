import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateDeliveryman { 
    name: string;
    password: string
 }


export class CreateDeliverymanUseCase {


    async execute({ name, password}: ICreateDeliveryman) {

        const deliverymanExist = await prisma.deliveryman.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        })
        if(deliverymanExist) {
            throw new Error("Deliveryman already exist")
        }

        const passwordHash = await hash(password, 8)

        const deliveryman = await prisma.deliveryman.create({
            data: {
                name,
                password: passwordHash
            }
        })


        return deliveryman;
    }

}