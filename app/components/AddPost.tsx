'use client'

import { useState } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-hot-toast"
import axios, { AxiosError } from "axios"

export default function CreatePost(){
    const [post, setPost] = useState({
        title: '',
        content: '',
    })
    const [isDisabled, setIsDisabled] = useState(false)


    const {mutate} = useMutation(
        async (post) => await axios.post('/api/posts/addPost', post),
        {
            onError: (error)=> {
                if(error instanceof AxiosError) {
                    toast(error?.response?.data.message)
                }
                setIsDisabled(false)
            },
            onSuccess: (resp) => {
                toast(`Postagem salva com sucesso, título: ${resp.data.title}`)
                setPost({title: '', content: ''})
                setIsDisabled(false)
            }
        }
    )

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsDisabled(true)
        mutate(post as any)
    }

    return (
        <form className="bg-white my-8 p-8 rounded-md" onSubmit={onSubmit}>
            <div className="flex flex-col my-4">
                <input 
                    name="title" 
                    id="title" 
                    value={post.title}
                    onChange={(e) => setPost({...post, title: e.target.value})}
                    placeholder="Select a title"
                    className="p-4 text-lg rounded-md my-2 bg-gray-200"
                    />    
            </div>
            <div className="flex flex-col my-4">
                <textarea 
                    name="content" 
                    id="content" 
                    value={post.content} 
                    cols={30} 
                    rows={10}
                    onChange={(e) => setPost({...post, content: e.target.value})}
                    placeholder="Description"
                    className="p-4 text-lg rounded-md my-2 bg-gray-200"
                    >    
                </textarea>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className={`font-bold text-sm ${post.content.length > 300 ? 'text-red-700': 'text-gray-700'}`}>
                    { `${post.content.length}/300` }
                </p>
                <button
                    disabled={isDisabled}
                    className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
                    type="submit"
                >
                    Create a Post
                </button>
            </div>
        </form>
    )
}