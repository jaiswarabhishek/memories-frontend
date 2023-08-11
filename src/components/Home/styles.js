import { makeStyles } from '@mui/styles';

import { deepPurple } from '@mui/material/colors';
//Theme
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#241468',
    },
    secondary: {
      main: '#f44336',
    },
  },
});





export default makeStyles(()=>({
  

    appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#241468',
  },
  image: {
    marginLeft: '15px',
  },
 pagination:{
    borderRadius: 4,
    marginTop: '1rem',
    padding: '16px',
 },

 
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },




}))