Instalar dependencias 
Dependencias do primas 
    prima -D 
    @prisma/client

Iniciar prisma
    yarn prisma init
        Será criado  a pasta pisma e o prima.shcema, que é onde faremos as criações das tabaleas


criando tabales
    model client {
    id  String @id @default(uuid())
    name  String @unique
    password String
    }