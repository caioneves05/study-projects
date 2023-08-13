import { IQueries } from "./types/IQueries"
import { useFetch } from "./useFetch"

export const useDataQueries = () => {
    return useFetch<IQueries[]>({ url: 'search' })
}
