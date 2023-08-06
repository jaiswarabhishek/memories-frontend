import * as api from '../api';



export const signin = (formData) => async (dispatch) => {
   
   

    try {
        // log in the user
        const { data } = await api.signIn(formData);
        dispatch({ type: 'AUTH', data });

        window.location.assign('/');
        
       
      
    } catch (error) {
        console.log(error);

    }
}

export const signup = (formData) => async (dispatch) => {
  

    try {
        // sign up the user
        const { data } = await api.signUp(formData);
        dispatch({ type: 'AUTH', data });
        window.location.assign('/');
       
      
    } catch (error) {
        console.log(error);
    }
}