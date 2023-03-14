import { useQuery } from "@tanstack/react-query";

import Axios from "axios";

export const useFetch = (ukey, id, url) => {

    const { data, isLoading, isError, refetch  } = useQuery([ukey, id], () => {
        return Axios.get(url)
        .then(res => res.data)
        .catch(err => console.error(err));
    });

    return { data, isLoading, refetch }
};