import styled from "styled-components"
import { IWorker } from "../../types/IWorker"
import { Card } from "./Card"

const SectionCard = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`

export const Assessment = ({ workers } : {workers: IWorker[] | null}) => {
    return(
        <SectionCard>
            {workers?.map((worker) => {
                return <Card worker={worker}/>
                
            })}
        </SectionCard>
    )
}