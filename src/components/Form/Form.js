import React from 'react'
import useStyles from './styles';
import { useState,useEffect } from 'react';
import FileBase from 'react-file-base64';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { TextField,Button,Typography,Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createPost,updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';



function Form({ currentId, setCurrentId}) {
    const post = useSelector((state) => currentId ? state.posts.posts.find((p) => p._id === currentId) : null);

  const [postData, setPostData] = useState({  title: '', message: '', tags: '', selectedFile: '' });
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
      if(post) setPostData(post);
    }, [post])



    const handleSubmit = (e) => {
      e.preventDefault();


      


      if(currentId) {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
        
      } else {
        dispatch(createPost({ ...postData, name: user?.result?.name }));
      }
      clear();
    
    }

    if(!user?.result?.name) {
      return (
        <Paper className={classes.paper}>
          <Typography variant="h6" align="center">
            Please Sign In to create your own memories and like other's memories.
          </Typography>
        </Paper>
      )
    }
    const clear = () => {

        setPostData({ title: '', message: '', tags: '', selectedFile: '' });
        setCurrentId(null);

    }
  return (
   
    <Paper className={classes.paper}>
  
      <form autoComplete="off" noValidate 
      className={`${classes.root} ${classes.form}`}
      onSubmit={handleSubmit}  >
        {
          currentId ? <Typography variant="h6">Editing a Memory</Typography> :
          <Typography variant="h6">Creating a Memory</Typography>
}
       

        <TextField
        value={postData.title}
        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        name="title" variant="outlined" label="Title" fullWidth/>

        <TextField
        value={postData.message}
        onChange={(e) => setPostData({ ...postData, message: e.target.value })}
        name="message" variant="outlined" multiline rows={4} label="Message" fullWidth/>

        <TextField
        value={postData.tags}
        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}
        name="tags" variant="outlined" label="Tags (comma separated)" fullWidth/>

        <div className={classes.fileInput}>
          <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
          />

        </div>
                  <Button
                  className={classes.buttonSubmit}
                  style={{ marginBottom: 10 } }
                  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>

                  <Button
                   className={classes.buttonSubmit}
                   //color Tomato
                   style={{background: "#EA1179"}}
                  onClick={clear}
                  variant="contained"  size="medium" fullWidth>Clear</Button>

      </form>


    </Paper>
   
  )
}

export default Form
