import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

import { BeatLoader } from 'react-spinners';


const Details = () => {
  const { id } = useParams()
  const {data, isLoading, isError, refetch} = useFetch('pets', id, `http://pets-v2.dev-apis.com/pets?id=${id}`)
  
  useEffect(() => {
    console.log(data?.pets[0])
  }, [data])
  
  if (isLoading) {
    return (
      <div className='loading-pane'>
            <h2 className='loader'>
            <BeatLoader color="#123abc" loading={true} />
            </h2>
            </div>
    ) 
  }
  if (isError) {
    return (
      <div className='error-pane'>
            <h2 className='loader'>
            Srry, cannot fetch data from server.
            </h2>
            </div>
    ) 
  }

  const pet = data?.pets[0];

  return (
    <div className='details'>
      <div>
        <h1>{pet.name}</h1>
        <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}
        <button>Adopt {pet.name}!</button>
        <p>{pet.description}</p>
        </h2>
      </div>
    </div>
  )
}

export default Details