import  { getServerSession } from 'next-auth/next';
import { authOptions } from "@pages/api/auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

const isAutenticated = async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getServerSession(req, res, authOptions)

    if(!session) {
        return res.status(401).json({message: 'Please sign in to make a post'})
    }

    return session

}

export default isAutenticated