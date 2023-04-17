import type { NextApiRequest, NextApiResponse } from "next";
import PostValidator from "./validators/PostValidator";
import prisma from "@prisma/client"
import { getServerSession } from "next-auth";
import { authOptions } from "@pages/api/auth/[...nextauth]";
import { ValidationError } from "yup";

type PostPayload = {
    title: string 
    content: string
}

const handler = async ( req: NextApiRequest, res: NextApiResponse ) => {
    const session = await getServerSession(req, res, authOptions)

    if(!session){
        return res.status(401).json({message: 'não autorizado'})
    }

    const user = await prisma.user.findUnique({
        where: { email: session?.user?.email } as any
    })

    if(!user){
        return res.status(422).json({message: 'usuário não válido'})
    }
        
    if(req.method === 'POST' ) {
        try {
            const validPost = await PostValidator(req.body as any)

            if(validPost instanceof ValidationError){
                throw new Error("erro de validação", validPost) 
            }
            const result = await prisma.post.create({
                data: {
                    ...validPost,
                    userId: user.id
                }
            })
            return res.status(200).json({message: 'Criado com successo', ...result})
        } catch (error: any) {
            return res.status(422).json({message: 'erro ao salvar', ...error})
        }
        
    }
    
}

export default handler