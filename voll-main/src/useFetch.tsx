import { useEffect, useState } from "react";

export function useFetch<T>({ url }: {url: string}) {
    const [data,setData] = useState<T | null>(null)
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(`http://localhost:8080/${url}`).then(
            res => res.json()
        ).then(data => setData(data)).catch(error => setError(error))
    }, [url])

    return { data, error }
}