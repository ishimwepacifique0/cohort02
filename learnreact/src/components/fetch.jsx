// axios and fetch  


import React, { useEffect } from 'react'
import axios from 'axios'

function Fetch() {
    const [data, setData] = React.useState()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YzI5MWM1YzNjZTI1OWZjY2IxODU0MDc5OGM5MGQ3MCIsIm5iZiI6MTcyMTkyNzU3OS4wMTgwNDIsInN1YiI6IjYzZDhkZTM1YTkxMTdmMDA5ZGE0MDI3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pH10FOtace6qYRLLf2s08UYEhwi3A1Dgfup_CxUSvdg'
        }
    };

    const fetchMoveied = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            console.log(response.data.results)
            setData(response.data.results)
        } catch (e) {
            console.log(e)
        }

    }

    useEffect(() => {
        fetchMoveied()
    }, [])


    console.log(data)

    return (
        <div className='grid lg:grid-cols-3 gap-12'>
            {data.map((items, index) => {
                return (
                    <>
                        <div className='w-78 border mr-4 rounded h-96'>
                            <img src={`https://image.tmdb.org/t/p/w500/${items.poster_path}`} className='w-full h-full' />
                            <h1>{items.original_title}</h1>
                        </div>

                    </>
                )
            })}

        </div>
    )
}

export default Fetch
