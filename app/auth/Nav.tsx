import Link from "next/link"
import Login from "./Login"
import Logged from "./Logged"
import { getServerSession } from "next-auth"
import { authOptions } from '../../pages/api/auth/[...nextauth]'


export default async function Nav(){
    const session = await getServerSession(authOptions)
    
    const image = session?.user?.image || '/next.svg'

    return (
        <nav className="flex justify-between items-center py-8">
            <Link href={"/"}>
                <h1 className="font-bold text-lg">
                Send it!                
                </h1>
            </Link>
            <ul className="flex items-center gap-6">
                { !session?.user && <Login /> }
                { session?.user && <Logged image={image}/> }
                    
            </ul>
        </nav>
    )
}