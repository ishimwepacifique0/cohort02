import { useState } from 'react'
import Greeting from './components/function';
import Product from './components/product';

function App() {

  // array object
  const name = [{
    id: 1,
    name: "Gisele",
    age: 20
  },
  {
    id: 2,
    name: "Paccy",
    age: 20
  },
  {
    id: 3,
    name: "peggy",
    age: 23
  }
  ]


const handleElement = () =>{

  
}


  return (
    <>
      <div>
        <h1 className='text-xl text-red-200 bg-slate-900'>Product List</h1>
        <div className='flex justify-center items-center'>
          <table className=' border border-collapse'>
            <tr className='border'>
              <th className='p-4'>ID</th>
              <th className='p-4'>Name</th>
              <th className='p-4'>Age</th>
              <th className='p-4'>Action</th>
            </tr>
            {name.map((items,index)=>{
              return (
                <>
                <tr>
                  <td>{items.id}</td>
                  <td>{items.name}</td>
                  <td>{items.age}</td>
                  <td>
                  <button className='bg-red-500 p-1 border rounded' onClick={handle} >Click me</button>
                  </td>
                </tr>
                </>
              )
            })}

          </table>
          </div>
          
      </div>
    </>
  )
}

export default App
