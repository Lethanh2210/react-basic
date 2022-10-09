import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useGetApi} from "../../hooks/getApiHooks";
import {Button} from "@mui/material";
import { Link } from "react-router-dom";
import LoadingScreen from "react-loading-screen";
import {Image} from "react-bootstrap";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));



export default function ProductTable() {
    const {data, loading} = useGetApi({url: 'http://localhost:5000/api/products?limit=10'})




    return (
        <div>
            {loading &&
                <LoadingScreen
                    loading={true}
                    bgColor="#f1f1f1"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    text="Loading..."
                />
            }
            <Button variant="contained" color="success">Add Product</Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="center">Price</StyledTableCell>
                            <StyledTableCell align="center">Product</StyledTableCell>
                            <StyledTableCell align="center">Color</StyledTableCell>
                            <StyledTableCell align="center">Image</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data?.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    <Link className="linkProduct" to={`/${row.id}`}>
                                        {row.name}
                                    </Link>
                                </StyledTableCell>
                                <StyledTableCell align="center">${Math.floor(row?.price)}</StyledTableCell>
                                <StyledTableCell align="center">{row.product}</StyledTableCell>
                                <StyledTableCell align="center">{row.color}</StyledTableCell>
                                <StyledTableCell align="center">
                                    <Image src={row?.image} style={{width: "50px"}} />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>


    );
}
