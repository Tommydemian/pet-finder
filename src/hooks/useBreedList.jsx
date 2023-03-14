import  Axios  from 'axios'
import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'

const localCache = {}

export const useBreedList = (animal) => {
  
    const [breedList, setBreedList] = useState([])
    const [status, setStatus] = useState('unloaded')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) { // already on local cache
            setBreedList(localCache[animal]) // set it to whatever is on the local cache
        } else {
            requestBreedList();
        }
    
        function requestBreedList() {
            setBreedList([]);
            setStatus('loading');
            setLoading(true)

            Axios.get(`http://pets-v2.dev-apis.com/breeds?animal=${animal}`)
            .then(res => res.data).then(data => {
                localCache[animal] = data.breeds || []
                setBreedList(localCache[animal])
                setStatus('loaded');
                setLoading(false);
            })          
        }
    }, [animal])

    return { breedList, status, loading }
}

