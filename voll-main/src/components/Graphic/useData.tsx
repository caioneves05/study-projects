import { IQueries } from "../../types/IQueries"
import { IWorker } from "../../types/IWorker"

interface Props {
    workers: IWorker[] | null
    searchs: IQueries[] | null
}

export const useData = ({ workers, searchs }: Props) => {
    let data;

    if(workers && searchs) {
        data = workers.map((worker) => ({
            name: worker.name,
            searchs: searchs.filter((search) => 
                search.profesional.some((prof) => prof.name === worker.name)
            ).length
        }))
    }
    
    
    
}