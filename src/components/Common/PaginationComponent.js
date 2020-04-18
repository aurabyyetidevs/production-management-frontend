import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import {makeStyles} from "@material-ui/core/styles/index";

const useStyles = makeStyles({
    root:{
        marginTop:10,
        marginBottom:10,
        marginLeft: '35%'//TODO::fix
    },
    pagination:{
        textAlign: 'center',
        marginTop:10,
        color:"#d77762"
    }
});

const PaginationComponent = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination size="small" count={10} color='primary' />
        </div>
    );
};

export default PaginationComponent;
