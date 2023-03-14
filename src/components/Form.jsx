import React from 'react'

const Form = ({animal, setAnimal, ANIMALS, setBreed, breeds, setRequestParams }) => {
  return (
    <form onSubmit={(e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const obj = {
            animal: formData.get('animal') ?? '',
            breed: formData.get('breed') ?? '',
            location: formData.get('location') ?? '',
        };
        setRequestParams(obj)
    } } >
        <label htmlFor="location">
            <input
                type="text"
                name='location'
                id='location'
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
                name="breed"
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