import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BeatLoader } from 'react-spinners';

import { useBreedList } from '../hooks/useBreedList';

import Form from './Form';
import Results from './Results';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])

    const { breedList: breeds, status, loading } = useBreedList(animal)

    useEffect(() => {
        requestPets();
    }, [])

    function requestPets() {

        axios.get(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)
            .then(res => res.data).then(data => setPets(data.pets))
            .catch(err => console.error(err));
    }

    return (

        <div className='search-params'>
            <BeatLoader color="#123abc" loading={true} />

            <Form
                requestPets={requestPets}
                ANIMALS={ANIMALS}
                animal={animal}
                setAnimal={setAnimal}
                location={location}
                setLocation={setLocation}
                breeds={breeds}
                setBreed={setBreed}
            />
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams