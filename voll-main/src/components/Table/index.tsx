import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IQueries } from "../../types/IQueries";

const StyleCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: "var(--azul-escuro)",
        fontSize: 18,
        fontWeight: 700,
        fontFamily: "var(--fonte-principal)"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        fontFamily: "var(--fonte-principal)"
    }
}))

const StyleLine = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
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
                            <StyleCell>Date</StyleCell>
                            <StyleCell>Hour</StyleCell>
                            <StyleCell>Professional</StyleCell>
                            <StyleCell>Especiality</StyleCell>
                            <StyleCell>Patient</StyleCell>
                            <StyleCell>Modality</StyleCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {search?.map((line) => {
                            return(
                                <StyleLine>
                                    <StyleCell component="th" scope="row">{new Date(line.date).toLocaleDateString()}</StyleCell>
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