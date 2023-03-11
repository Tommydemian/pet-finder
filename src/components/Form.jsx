import React from 'react'

const Form = ({requestPets, animal, setAnimal, location, setLocation, ANIMALS, setBreed, breeds }) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        requestPets()
    } } >
        <label htmlFor="location">
            <input
                type="text"
                id='location'
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location..."
            />
        </label>
        <label htmlFor="animal">
            <select
                type="text"
                id='animal'
                value={animal}
                onChange={(e) => {
                    setAnimal(e.target.value)
                    setBreed('')
                }}
                placeholder="Location..."
            >
                <option></option>
                {
                    ANIMALS.map(animal => (
                        <option key={animal}>{animal}</option>
                    ))
                }

            </select>
        </label>
        <label htmlFor="breed">
            <select
                type="text"
                id='breed'
                disabled={breeds.length === 0}
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="Location..."
            >
                <option></option>
                {
                    breeds.map(breed => (
                        <option key={breed}>{breed}</option>
                    ))
                }

            </select>
        </label>
        <button>Submit</button>
    </form>
  )
}

export default Form