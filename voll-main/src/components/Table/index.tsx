import { Paper, TableBody, TableCell, TableHead, TableRow, styled, tableCellClasses } from "@mui/material"
import TableContainer from "@mui/material/TableContainer/TableContainer"
import Table from "@mui/material/Table/Table"
import { IQueries } from "../../types/IQueries"

const StyleCell = styled(TableCell)(() => ({
   [`&.${tableCellClasses.head}`]: {
    color: "var(--azul-escuro",
    fontSize: 18,
    fontWeight: 700,
    fontFamily: "var(--fonte-principal"
   },
   [`$.${tableCellClasses.body}`] : {
    fontSize: 16,
    fontFamily: "var(--fonte-principal)"
   }
}))

const StyleLine = styled(TableRow)(() => ({
    [`&:ntn-og-type(odd)`]: {
        backgroundColor: "var(--cinza-claro)",
        align: "right"
    }
}))

export const Tabela = ({ search }: {search: IQueries[] | null}) => {
    return(
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 700}} arial-label="tabela-customizada">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Hour</TableCell>
                            <TableCell>Professional</TableCell>
                            <TableCell>Especiality</TableCell>
                            <TableCell>Patient</TableCell>
                            <TableCell>Modality</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {search?.map((line) => {
                            return(
                        <StyleLine>
                            <StyleCell>{new Date(line.date).toLocaleDateString()}</StyleCell>
                            <StyleCell>{line.hour}</StyleCell>
                            <StyleCell>{line.profesional[0].name}</StyleCell>
                            <StyleCell>{line.profesional[0].specialty}</StyleCell>
                            <StyleCell>{line.patient}</StyleCell>
                            <StyleCell>{line.modality}</StyleCell>
                        </StyleLine>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}