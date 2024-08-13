import React ,{useEffect}from 'react'

export default function UseEffectLearn() {
    console.log("Use EffectLearn")
    const handleDiplay = () =>{
        const date = new Date();
        console.log(date)
    }

    



  return (
    <div>
      <button onClick={handleDiplay}>Click me</button>
    </div>
  )
}
