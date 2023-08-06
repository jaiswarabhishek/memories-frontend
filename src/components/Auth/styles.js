import { makeStyles } from '@mui/styles';


export default makeStyles(() => ({
    paper: {
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
    },
    root: {
        '& .MuiTextField-root': {
            margin: '10px',
        },
    },
    form: { 
        width: '100%',
        marginTop: '10px',

    },
    avatar: {
        margin:'1px',
        backgroundColor: '#EA1179',
    },

    submit: {
        margin: '10px 0px 10px',
       
        
    },
    googleButton: {
        marginBottom: '10px',
    },

}));



