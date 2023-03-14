import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import Axios from "axios";
// const url = `http://pets-v2.dev-apis.com/pets?id=${id}`
export const useFetch = (ukey, url) => {

    const { data, isLoading, isError, refetch  } = useQuery([ukey], () => {
        return Axios.get(url)
        .then(res => res.data)
        .catch(err => console.error(err));
    });

    return { data, isLoading, refetch }
};