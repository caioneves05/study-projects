import { Rating } from "@mui/material"
import { IWorker } from "../../../types/IWorker"
import styled from "styled-components"

const StyleContainer = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
`

const StyleImage = styled.img`
    width: 80px;
    height: 80px;
    border-radius: 100%;
`

const StyleList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const StyleInfos = styled.div`
    display: flex;
    gap: 30px;
`

const StyleItem = styled.li`
    list-style: none;   
`

export const Card = ({ worker }: {worker: IWorker}) => {
    return(
        <StyleContainer>
            <StyleList>
                <StyleInfos>
                    <StyleItem>
                        <StyleImage src={worker.image} alt={`professional profile`} />
                    </StyleItem>
                    <StyleItem>
                        <p>{worker.name}</p>
                        <p>{worker.specialty}</p>
                    </StyleItem>
                </StyleInfos>
                <StyleItem>
                    <Rating 
                    name="simple-controlled"
                    value={worker.note}
                    readOnly={true}
                    />
                </StyleItem>
            </StyleList>
        </StyleContainer>
    )
}