import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { IWorker } from "../../types/IWorker"
import { IQueries } from "../../types/IQueries"
import { useData } from "./useData"
import styled from "styled-components"

interface PropsGraphic {
    searchs: IQueries[] | null
    workers: IWorker[] | null
}

interface IData {
    name: string,
    searchs: number
}

const StyleSection = styled.section`
background-color: var(--branco);
border-radius: 16px;
`

export const Graphic = ({ workers, searchs }: PropsGraphic) => {
    let data: Array<IData> = useData({ workers, searchs })
    
    return(
        <StyleSection>
            <ResponsiveContainer width={"100%"} height={350}>
                <BarChart 
                layout="vertical" 
                data={data} 
                margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
                >
                    <XAxis type="number"></XAxis>
                    <YAxis type="category" dataKey="name"></YAxis>
                    <Bar dataKey="searchs" fill="#083860" barSize={30}></Bar>
                </BarChart>
            </ResponsiveContainer>
        </StyleSection>
    )
}