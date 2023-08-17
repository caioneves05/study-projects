import { IQueries } from "../../types/IQueries"
import { IWorker } from "../../types/IWorker"

interface Props {
    workers: IWorker[] | null
    searchs: IQueries[] | null
}
interface IData {
    name: string,
    searchs: number
}

export const useData = ({ workers, searchs }: Props)  => {
    let data: Array<IData> = [];

    if(workers && searchs) {
        data = workers.map((worker) => ({
            name: worker.name,
            searchs: searchs.filter((search) => 
                search.professional.some((prof) => prof.name === worker.name)
            ).length
        }))
    }
    return data;    
}