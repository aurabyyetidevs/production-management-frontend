import React from 'react';
import {Table, TableBody, Badge, Paper, TableHead, TableCell, TableContainer, TableRow} from "@material-ui/core/es/index";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import PaginationComponent from "../../Common/PaginationComponent";
import DeleteSharp from '@material-ui/icons/DeleteSharp';
import OrderListSearchComponent from './OrderListSearchComponent';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        padding:8,
        paddingLeft:15,
        color: theme.palette.common.black,
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.tables.tableRowPrimary,
        },
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.tables.tableRowSecondary,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    root:{
        // height: '100%',
        // width: '100%',
        // position: 'relative',
        // flexDirection: 'column',//TODO::zrobic overflow hidden
        // overflow: 'hidden',
        // overflowY: 'auto',
        // flex: '1 1 auto'
    },
    badge: {
        left:20,
        width:50,
        backgroundColor: "#d77762",//TODO::use the one from palette
        color: "white"
    }
});

const rows = [
    createData(1, '001/2020', 'Jan Kowalski', 'przyjęto', '24-05-2020','30-05-2020',''),
    createData(2, '002/2020', 'Karol Nurzyński', 'zaplanowano', '01-06-2020','12-06-2020', 'UKA'),
    createData(3, '003/2020', 'Dominik Bokowy', 'w realizacji', '01-06-2020','14-06-2020', 'KW Warszawa'),
    createData(4, '004/2020', 'Szkoła alpinizmu "Wpionie"', 'do odbioru', '25-05-2020','30-05-2020',''),
    createData(5, '005/2020', 'Krzysztof Wielicki', 'przyjęto', '26-05-2020','02-06-2020',''),
    createData(6, '006/2020', 'Jan Kowalski', 'przyjęto', '24-05-2020','30-05-2020',''),
    createData(7, '007/2020', 'Karol Nurzyński', 'zaplanowano', '01-06-2020','12-06-2020', 'UKA'),
    createData(8, '008/2020', 'Dominik Bokowy', 'w realizacji', '01-06-2020','14-06-2020', 'KW Warszawa'),
    createData(9, '009/2020', 'Szkoła alpinizmu "Wpionie"', 'do odbioru', '25-05-2020','30-05-2020',''),
    createData(10, '010/2020', 'Krzysztof Wielicki', 'przyjęto', '26-05-2020','02-06-2020','')
];

function createData(lp, orderNumber, orderer, status, orderDate, ralizationDate, type ) {
    return {lp, orderNumber, orderer, status, orderDate, ralizationDate, type };
}

const OrderListComponent = () => {

        const classes = useStyles();

        const getBadgeDescription = (description)=>{
            return description.length>4 ? description.substring(0, 4) : description;
        }

        return (
            <>
                <OrderListSearchComponent/>
                <TableContainer  component={Paper}>
                    <Table stickyHeader={true} className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell style={{width:'2%'}}>Lp.</StyledTableCell>
                                <StyledTableCell align="left">Nr zamówienia</StyledTableCell>
                                <StyledTableCell align="left">Zamawiający</StyledTableCell>
                                <StyledTableCell align="left">Status</StyledTableCell>
                                <StyledTableCell align="left">Data zamówienia</StyledTableCell>
                                <StyledTableCell align="left">Termin realizacji</StyledTableCell>
                                <StyledTableCell align="left"></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody classes={{root:classes.root}}>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name} className={classes.tableRow}>
                                    <StyledTableCell align="left">{row.lp}</StyledTableCell>
                                    <StyledTableCell align="left">{row.orderNumber}</StyledTableCell>
                                    <StyledTableCell align="left">{row.orderer}
                                    <Badge variant="circle" classes={{badge: classes.badge}} badgeContent={getBadgeDescription(row.type)} invisible={row.type===''}/></StyledTableCell>
                                    <StyledTableCell align="left">{row.status}</StyledTableCell>
                                    <StyledTableCell align="left">{row.orderDate}</StyledTableCell>
                                    <StyledTableCell align="left">{row.ralizationDate}</StyledTableCell>
                                    <StyledTableCell style={{paddingRight:15}} align="left"><DeleteSharp style={{ color: "#919191" }}/></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <PaginationComponent/>
                </TableContainer>
            </>
        );
}
OrderListComponent.propTypes = {};

export default OrderListComponent;

