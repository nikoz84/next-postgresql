import Link from "next/link"
import Login from "./Login"


export default async function Nav(){
    return (
        <nav>
            <Link href={'/'}>Send it!</Link>
            <ul>
                <Login />    
            </ul>
        </nav>
    )
}