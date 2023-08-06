import React from 'react'
import { Avatar,Button , Grid , Paper , Typography,Container } from '@mui/material'
import TextField from '@mui/material/TextField';
import useStyles from './styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Input from './Input';
import { useState,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {signup,signin} from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };




function Auth() {
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const [isSignup, setIsSignup] = useState(false);

    const dispatch = useDispatch();

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup);
        setShowPassword(false);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(isSignup) {
            dispatch(signup(formData));
         
        }
        else {
            dispatch(signin(formData));
             
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    


  return (
    <Container component="main" maxWidth="xs">
        <Paper className={classes.paper}  elevation={3}>
            <Avatar style={{ backgroundColor: '#EA1179'}} className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5">{isSignup?"Sign Up" : "Sign In"}</Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>

                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                    <Input name="password" label="Password" handleChange={handleChange}  type={showPassword?"text":"password"} handleShowPassword={handleShowPassword} />

                    {
                        isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                    }


                    <Button type="submit" size="large" style={{width:'100%' , marginLeft:'1em', marginTop:'1em'}}    variant="contained" color="primary" className={classes.submit}>
                        {isSignup ? "Sign Up" : "Sign In"}
                    </Button>

                   

                    <Grid style={{margin:'0.5em' ,fontSize:'capitalize'}} container justify="flex-end">
                        <Grid item >
                            <Button style={{color:"black" ,textTransform: "capitalize"}} onClick={switchMode}>
                                {
                                    isSignup?"Already have an account? Sign in":"Don't have an account? Sign Up"

                                }
                            </Button>
                           </Grid>
                    </Grid>
                         
                </Grid>
            </form>
        </Paper>
    </Container>

  )
}

export default Auth
