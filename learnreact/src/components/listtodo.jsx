import React from 'react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import { HiPencilAlt, HiOutlineTrash } from 'react-icons/hi'
import { Link } from "react-router-dom";
export default function TopicList({id,title,description}) {
    const removeRecord = async()=>{
        console.log('Removing')
    }
    return (
        <div className='max-w-4xl mx-auto'>
            <div className='p-4 rounded hover:shadow-inner hover:transition-all hover:duration-200 border border-slate-300 my-3 flex items-center justify-between'>
                <div>
                    <h1 className='font-semibold text-2xl '>{title}</h1>
                    <div>{description}</div>
                </div>
                <div className='flex gap-2'>
                    <a>
                        <HiOutlineTrash size={24} className='text-red-400'/>
                    </a>
                    <Link>
                        <HiPencilAlt size={24} />
                    </Link>

                </div>
            </div>
        </div>
    )
}