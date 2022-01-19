import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateClientDTO {
    name: string; 
    password: string
}

export class CreateClientUseCase { 

    async execute({name, password}: ICreateClientDTO) {
    
        const clientExist = await prisma.client.findFirst({
            where: {
                name: {
                    equals: name,
                    mode: 'insensitive'
                }
            }
        })

        if(clientExist) {
            throw new Error("Client already exist!")
        }

        const passwordHash = await hash(password, 8)

        const client = await prisma.client.create({
            data: {
                name,
                password:passwordHash
            }
        })
        return client;
    }
}   