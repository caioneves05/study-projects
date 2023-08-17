import { IWorker } from "./IWorker"

export interface IQueries extends IWorker {
    id: number
    date: string
    hour: string
    professional: Array<IWorker>
    patient: string
    modality: string
}