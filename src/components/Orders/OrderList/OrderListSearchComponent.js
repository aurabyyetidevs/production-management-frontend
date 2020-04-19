import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { KeyboardDatePicker } from '@material-ui/pickers';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding:10,
        marginBottom:40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'//TODO::change to color from pallete
    },
    iconButton: {
        verticalAlign: 'bottom'
    },
    datePicker: {
        marginTop: 10
    },
    iconWrapper:{
        width: "100%",
        textAlign:"right"
    }
});

const orderTypes = [
    {
        value: null,
        label: 'wszystkie',
    },
    {
        value: 'individual',
        label: 'indywidualne',
    },
    {
        value: 'group',
        label: 'grupowe',
    }
];

const statuses = [
    {
        value: null,
        label: 'wszystkie',
    },
    {
        value: 'ordered',
        label: 'przyjęto',
    },
    {
        value: 'planned',
        label: 'zaplanowano',
    },
    {
        value: 'ralization',
        label: 'w realizacji',
    }
];

const StyledTextField = withStyles((theme) => ({
    root: {
        margin:10,
        minWidth:120
    },
}))(TextField);


const OrderListSearchComponent = () => {
    const classes = useStyles();

    const [orderType, setOrderType] = React.useState();
    const [status, setStatus] = React.useState();
    const [selectedDate, setSelectedDate] = React.useState();
    const [purchaser, setPurchaser] = React.useState();
    const [orderNumber, setOrderNumber] = React.useState();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleChange = (event) => {
        switch(event.target.id){
            case 'orderType':
                setOrderType(event.target.value);
                break;
            case 'status':
                setStatus(event.target.value);
                break;
            case 'orderNumber':
                setOrderNumber(event.target.value);
                break;
            case 'purchaser':
                setPurchaser(event.target.value);
                break;
        }
    };

    const clearSearchParams = () => {
        setSelectedDate(null);
        setOrderType(null);
        setStatus(null);
        setOrderNumber("");
        setPurchaser("");
    };

    return (
        <>
        <Card className={classes.root}>
            <form noValidate autoComplete="off">
                <StyledTextField id="orderNumber" onChange={handleChange} value={orderNumber} label="Numer zamówienia" color={'primary'}/>
                <StyledTextField id="purchaser" onChange={handleChange} value={purchaser} label="Zamawiający" color={'primary'}/>
                <StyledTextField
                    id="orderType"
                    select
                    label="Typ"
                    value={orderType}
                    onChange={handleChange}
                >
                    {orderTypes.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledTextField>
                <StyledTextField
                    id="status"
                    select
                    label="Status"
                    value={status}
                    onChange={handleChange}
                >
                    {statuses.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </StyledTextField>

                <KeyboardDatePicker
                    className={classes.datePicker}
                    margin="normal"
                    id="orderDate"
                    label="Data zamówienia"
                    format="MM/dd/yyyy"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{'aria-label': 'change date',}}
                />

                <span className={classes.iconWrapper}>
                    <IconButton className={classes.iconButton} aria-label="delete">
                        <ClearIcon onClick={clearSearchParams}/>
                    </IconButton>
                    <IconButton className={classes.iconButton} color={'primary'} aria-label="delete">
                        <SearchIcon />
                    </IconButton>
                </span>

            </form>
        </Card>
        </>
    );
};
export default OrderListSearchComponent;
