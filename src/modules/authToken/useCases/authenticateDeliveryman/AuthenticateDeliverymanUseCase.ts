import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";




export class AuthenticateDeliverymanUseCase { 

    async execute(name: string, password: string) {
        const deliveryman = await prisma.deliveryman.findFirst({
            where: {
                name
            }
        })

        if(!deliveryman) {
            throw new Error('Name or password incorrets!')
        }

        const passwordMatch = await compare(password, deliveryman.password);

        if(!passwordMatch ) {
            throw new Error("Name or password incorrects!")
        }

        const token = sign({name},'ee6442bc64252c123cbe8978e7f3a97c',{
            subject: deliveryman.id,
            expiresIn: '1d'
        } )

        return token;
    }

}