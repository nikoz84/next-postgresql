'use client'

import Image from "next/image"
import Link from "next/link"
import { signOut } from "next-auth/react"


export default function Logged({image}:{image: string} ){
    
    return (
        <li className="flex gap-8 items-center">
            <button 
                className="bg-gray-700 text-white text-sm px-6 p-y6 rounded-md"
                onClick={() => signOut()}
                >
                    Sign out
            </button>
            <Link href={'/dashboard'}>
                <Image className="w-14 rounded-full" 
                    priority 
                    width={'64'} 
                    height={'64'} 
                    src={image} 
                    alt={'user avatar'} />
            </Link>
        </li>
    )
}