import { IWorker } from "./types/IWorker"
import { useFetch } from "./useFetch"

export const useDataQueries = () => {
    return useFetch<IWorker[]>({ url: 'professionals' })
}
