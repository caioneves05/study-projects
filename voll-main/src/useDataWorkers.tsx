import { IWorker } from "./types/IWorker"
import { useFetch } from "./useFetch"

export const useDataWorker = () => {
    return useFetch<IWorker[]>({ url: 'professionals' })
}
