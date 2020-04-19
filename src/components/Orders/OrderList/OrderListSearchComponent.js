import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';

// import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import 'date-fns';
// import DateFnsUtils from '@date-io/date-fns';


const useStyles = makeStyles({
    root: {
        minWidth: 275,
        padding:10,
        marginBottom:40,
        backgroundColor: 'rgba(255, 255, 255, 0.7)'//TODO::change to color from pallete
    },
    iconButton: {
        verticalAlign: 'bottom'
    }
});

const orderTypes = [
    {
        value: undefined,
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
        value: undefined,
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

    // const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
    //
    // const handleDateChange = (date) => {
    //     setSelectedDate(date);
    // };


    const [orderType, setOrderType, status, setStatus] = React.useState();

    const handleChange = (event) => {
        switch(event.target.id){
            case 'type':
                setOrderType(event.target.value);
            case 'status':
                setStatus(event.target.value)
        }
    };

    return (
        <>
        {/*<MuiPickersUtilsProvider utils={DateFnsUtils}>*/}
        <Card className={classes.root}>
            <form noValidate autoComplete="off">
                <StyledTextField id="orderNumber" label="Numer zamówienia" color={'primary'}/>
                <StyledTextField id="orderer" label="Zamawiający" color={'primary'}/>
                <StyledTextField
                    id="type"
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

                <IconButton classes={classes.iconButton} aria-label="delete">
                    <ClearIcon />
                </IconButton>
                <IconButton color={'primary'} aria-label="delete">
                    <SearchIcon />
                </IconButton>

                {/*<Button*/}
                    {/*color={'primary'}*/}
                    {/*variant="contained"*/}
                    {/*startIcon={<DeleteIcon />}*/}
                    {/*size="medium"*/}
                    {/*className={classes.margin}>*/}
                    {/*Wyczyść*/}
                {/*</Button>*/}
                {/*<Button*/}
                    {/*color={'primary'}*/}
                    {/*variant="contained"*/}
                    {/*startIcon={<FilterListIcon />}*/}
                    {/*size="medium"*/}
                    {/*className={classes.margin}>*/}
                    {/*Filtruj*/}
                {/*</Button>*/}


                {/*<KeyboardDatePicker*/}
                    {/*margin="normal"*/}
                    {/*id="date-picker-dialog"*/}
                    {/*label="Data zamówienia"*/}
                    {/*format="MM/dd/yyyy"*/}
                    {/*value={selectedDate}*/}
                    {/*onChange={handleDateChange}*/}
                    {/*KeyboardButtonProps={{'aria-label': 'change date',>*/}
            </form>
        </Card>
        {/*</MuiPickersUtilsProvider>*/}
        </>
    );
};
export default OrderListSearchComponent;
