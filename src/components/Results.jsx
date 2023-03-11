import React from 'react'
import Pet from './Pet'

const Results = ({ pets }) => {
  return (
    <div className='search'>
        {
            !pets.length ? (
                <h1>Pets not found</h1> 
            ) :
            (
                pets.map(pet => (
                    <Pet
                    key={pet.id}
                    name={pet.name}
                    animal={pet.animal}
                    breed={pet.breed}
                    images={pet.images}
                    location={`${pet.city} ${pet.state} `}       
                    />
                ))
            )
        }
    </div>
  )
}

export default Results