import {colors} from '@material-ui/core';

const white = '#FFFFFF';
const black = 'rgba(0, 0, 0, 0.7)';
const whiteBgPrimary = 'rgba(255, 255, 255, 0.7)';
const whiteBgSecondary = 'rgba(255, 255, 255, 0.8)';

const brickOne = "#d78672";
const brickTwo = "#d7785b";
const brickThree = "#d76f4b";

export default {
    black,
    white,
    brickOne,
    brickTwo,
    primary: {
        contrastText: black,
        dark: brickThree,
        main: brickTwo,
        light: brickOne
    },
    secondary: {
        contrastText: black,
        dark: colors.blue[900],
        main: colors.blue['A400'],
        light: colors.blue['A400']
    },
    error: {
        contrastText: black,
        dark: colors.red[900],
        main: colors.red[600],
        light: colors.red[400]
    },
    text: {
        primary: white,
        secondary: white,
        link: colors.blue[600]
    },
    link: colors.blue[800],
    icon: white,
    background: {
        default: black,
        paper: black
    },
    tables: {
        tableRowPrimary: whiteBgPrimary,
        tableRowSecondary: whiteBgSecondary
    },
    divider: colors.grey[200]
};
