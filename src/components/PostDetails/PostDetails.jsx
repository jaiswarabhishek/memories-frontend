import React from 'react'
import { Paper,Typography,CircularProgress,Divider } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import moment from 'moment'
import { useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import useStyles from './styles';
import { getPost ,getPostsBySearch} from '../../actions/posts';

function PostDetails() {

  const { post,posts,isLoading } = useSelector((state) => state.posts);
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id,dispatch]);

  useEffect(() => {

    if (post) {
      dispatch(getPostsBySearch({ search: 'none', tags: post?.tags.join(',') }));
    }
  }
    , [post, dispatch]);


    const recommendedPosts = posts.filter(({ _id }) => _id !== post?._id);

    console.log(recommendedPosts);

  return (

    isLoading ? <Paper elevation={6} className={classes.loadingPaper}>
      <CircularProgress size="7em" />
    </Paper> : (
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant="h3" component="h2">{post?.title}</Typography>
            <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{post?.tags.map((tag) => `#${tag} `)}</Typography>
            <Typography gutterBottom variant="body1" component="p">{post?.message}</Typography>
            <Typography variant="h6">Created by: {post?.name}</Typography>
            <Typography variant="body1">{moment(post?.createdAt).fromNow()}</Typography>
           
          </div>
          <div className={classes.imageSection}>
            <img className={classes.media} src={post?.selectedFile} alt={post?.title} />
          </div>
        </div>
        {recommendedPosts.length && (
          <div className={classes.section}>
            <Typography gutterBottom variant="h5">You might also like:</Typography>
            <Divider />
            <div className={classes.recommendedPosts}>
              {recommendedPosts.map(({ title, message, name, likes, selectedFile, _id }) => (
                <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => navigate(`/posts/${_id}`)} key={_id}>
                  <Typography gutterBottom variant="h6">{title}</Typography>
                  <Typography gutterBottom variant="subtitle2">{name}</Typography>
                  <Typography gutterBottom variant="subtitle2">{message}</Typography>
                  <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                  <img style={{borderRadius:'1em'}} src={selectedFile} width="200px" />
                </div>
              ))}
            </div>
          </div>
        )}

      </Paper>
  )
  )

}

export default PostDetails
