import { makeStyles } from '@mui/styles';
import { deepPurple } from '@mui/material/colors';

export default makeStyles(()=>({
  

    appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'static',
    color: 'inherit',
    backgroundColor:'#fff',
    padding: '10px 50px',
   boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
    
  },
  heading: {
    color: '#241468',
    textDecoration: 'none',
  },
  image: {
    marginLeft: '15px',
  },

  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    },
    profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    width: '400px',
    },
    userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    },
    brandContainer: {
    display: 'flex',
    alignItems: 'center',
    
    },
    purple: {
    color: '#fff',
    backgroundColor: '#673ab7',
    
    },
   

}))