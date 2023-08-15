import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { IWorker } from "../../types/IWorker"
import { IQueries } from "../../types/IQueries"
import { useData } from "./useData"

interface PropsGraphic {
    searchs: IQueries[] | null
    workers: IWorker[] | null
}

export const Graphic = ({ workers, searchs }: PropsGraphic) => {
    let data = useData({ workers, searchs })
    
    return(
        <ResponsiveContainer width={"100%"} height={350}>
            <BarChart 
            layout="vertical" 
            data={data} 
            margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
            >
                <XAxis type="number">
                    
                </XAxis>
                <YAxis type="category" dataKey="name">
                <Bar dataKey="queries" fill="#083860" barSize={30}></Bar>
                </YAxis>
            </BarChart>
        </ResponsiveContainer>
    )
}