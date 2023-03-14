import React, { useState, useEffect } from 'react'
import axios from 'axios'


import { useBreedList } from '../hooks/useBreedList';
import { useFetch } from '../hooks/useFetch';

import Form from './Form';
import Results from './Results';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'reptile']

const SearchParams = () => {
    const [requestParams, setRequestParams] = useState({
        location: '',
        animal: '',
        breed: ''
    })
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState('')
    const [pets, setPets] = useState([])

    const { data: petsData, isLoading:isPetsDataLoading, refetch } = useFetch('animals', {animal, location, breed}, `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}` )

    const { breedList: breeds, status, loading } = useBreedList(animal)

    if (isPetsDataLoading) {
        return (
            <div>Loading data...</div>

        )
    }

    return (

        <div className='search-params'>
            <Form
                ANIMALS={ANIMALS}
                animal={animal}
                setAnimal={setAnimal}
                location={location}
                setLocation={setLocation}
                breeds={breeds}
                setBreed={setBreed}
                setRequestParams={setRequestParams}
            />
            <Results pets={petsData?.pets} />
        </div>
    )
}

export default SearchParams