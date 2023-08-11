import React from 'react'
import Post from './Post/Post'
import { Grid, CircularProgress,Paper } from '@mui/material';
import useStyles from './styles';
import { useSelector } from 'react-redux';

function Posts({setCurrentId}) {
  const {posts,isLoading} = useSelector((state) => state.posts);
  const classes = useStyles();

 if(!posts.length && !isLoading) return <h1>No posts</h1>;

  return (
   isLoading  ?  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <CircularProgress size="5em" />
        </div>
     : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts?.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12} md={6} lg={4}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}

            </Grid>
        )
        
      
   
  )
}

export default Posts
