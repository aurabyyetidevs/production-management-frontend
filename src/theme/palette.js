import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = 'rgba(0, 0, 0, 0.7)';

export default {
  black,
  white,
  primary: {
    contrastText: black,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
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
    default: '#F4F6F8',
    paper: black
  },
  divider: colors.grey[200]
};
