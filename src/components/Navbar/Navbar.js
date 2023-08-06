import React from 'react'
import useStyles from './styles';
import { AppBar,Typography,Toolbar } from '@mui/material';
import memories from '../../images/memories.png';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { Avatar } from '@mui/material';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import decode from 'jwt-decode';


function Navbar() {
    const classes = useStyles();
    // const user={
    //     result: {
    //         name: 'Rahul',
    //         imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F677228862692028821%2F&psig=AOvVaw0Q4Z3Z2Z4Z2Z4Z2Z4Z2Z4Z&ust=1634177222024000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJjQ4ZqH0_MCFQAAAAAdAAAAABAD'
    //     }

         
    // };
const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();
const logout = () => {
  dispatch({ type: 'LOGOUT' });
  navigate('/')
  setUser(null);
}

useEffect(() => {
  const token = user?.token;

  if(token) {
    const decodedToken = decode(token);

    if(decodedToken.exp * 1000 < new Date().getTime()) logout();
    
  }



  setUser(JSON.parse(localStorage.getItem('profile')));
}, [location]);
  


  return (
   <div className={classes.appBar} position="static" color="inherit">

        <div  className={classes.brandContainer}>
        <Typography component={Link} to='/'  className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
        </div>

        <Toolbar className={classes.toolbar}  >
        {user ? (
            <div className={classes.profile}>
            <Avatar className={classes.purple} style={{background:"#673ab7"}} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}  >Logout</Button>

            </div>
        ) : (
            <Button component={Link}   to="/auth" variant="contained" color="primary">Sign In</Button>
        )}
        </Toolbar>


</div>
  )
}

export default Navbar
