import React, { useEffect, useState } from 'react'
import {addDoc,collection} from 'firebase/firestore'
import { FIREBASE_DATABASE } from '../../firebase/configuration'

export default function AddTopic() {
    const [title, setTitle] = useState([])
    const [description, setDescription]= useState([])
    const addTodo = async (title, description) => {
        try {
          const docRef = await addDoc(collection(FIREBASE_DATABASE, "todos"), {
            title,
            description,
            createdAt: new Date(),
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      };


    return (
        <div className='flex flex-col gap-3 max-w-4xl mx-auto'>
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='p-4 border border-slate-400 px-8 py-2 focus:border'
                type='text'
                placeholder='Title' />

            <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='p-4 border border-slate-400 px-8 py-2'
                type='text'
                placeholder='Description' />


            <button onClick={()=>{addTodo}}  type='submit' className='bg-green-600 font-semibold text-white py-3 px-6 w-fit'>Add topic</button>
        </div>

    )
}