import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";




export class AuthenticateClientUseCase { 
    async execute(name: string, password: string) {

        const client = await prisma.client.findFirst({
            where: {
                name
            }
        })

        if(!client) {
            throw new Error("Name or password incorrects!")
        }

        const passwordMath = await compare(password, client.password);

        if(!passwordMath) {
            throw new Error('Name or passwor incorrects!')
        }

        const token = sign({name}, 'ab7b6a5346489aad946301c8764fa6d8', {
            subject: client.id,
            expiresIn: '1d'
        })

        return token;

    }
}