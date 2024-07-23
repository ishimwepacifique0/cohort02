import React ,{useEffect}from 'react'

export default function UseEffectLearn() {
    console.log("Use EffectLearn")
    const handleDiplay = () =>{
        const date = new Date();
        console.log(date)
    }

    useEffect(() => {
        handleDiplay()
    }, []) 
    

  return (
    <div>useEffectLearn</div>
  )
}
