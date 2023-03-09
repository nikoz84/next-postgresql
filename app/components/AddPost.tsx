'use client'

import { useState } from "react"

export default function CreatePost(){
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)

    return (
        <form className="bg-white my-8 p-8 rounded-md">
            <div className="flex flex-col my-4">
                <input 
                    name="title" 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Select a title"
                    className="p-4 text-lg rounded-md my-2 bg-gray-200"
                    />    
            </div>
            <div className="flex flex-col my-4">
                <textarea 
                    name="content" 
                    id="content" 
                    value={content} 
                    cols={30} 
                    rows={10}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Description"
                    className="p-4 text-lg rounded-md my-2 bg-gray-200"
                    >    
                </textarea>
            </div>
            <div className="flex items-center justify-between gap-2">
                <p className={`font-bold text-sm ${content.length > 300 ? 'text-red-700': 'text-gray-700'}`}>
                    { `${content.length}/300` }
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