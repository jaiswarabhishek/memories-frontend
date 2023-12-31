import React from 'react'
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography,ButtonBase } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deletePost ,likePost } from '../../../actions/posts';
import { useSelector } from 'react-redux';
import {useNavigate,Link} from 'react-router-dom';

function Post({post , setCurrentId}) {

   const navigate = useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();

    const user = JSON.parse(localStorage.getItem('profile'));

    const Likes = () => {

      if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }

      return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
    };
    


    



  return (
    <Card className={classes.card} style={{borderRadius:'15px' , cursor:'pointer'}} raised elevation={6}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
     
      <div className={classes.overlay}>
        <Typography variant="h6">{post.name}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button   style={{color:'white'}} size="small" onClick={() =>setCurrentId(post._id)}>
          <EditIcon fontSize="medium" />
        </Button>
        )}
      </div>
      <div className={classes.details}>
      <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
      </div>
      <Typography  onClick={() => navigate(`/posts/${post._id}`)} className={classes.title} variant="h5" gutterBottom>{post.title}</Typography>
      <CardContent >
      <Typography  variant="body2" color="textSecondary" component="p" >{post.message}</Typography>

      </CardContent>

     
     
      <CardActions className={classes.cardActions}>
        <Button  size="small" disabled={!user?.result} style={{color:"#F11A7B"}} onClick={() => dispatch(likePost(post._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <Button size="small" style={{color:"#B70404"}} onClick={() => dispatch(deletePost(post._id))  }>
          <DeleteIcon fontSize="small" />
          
        </Button>
        )}
      </CardActions>

  
    </Card>

  )
}

export default Post
