import React from 'react'
import useStyles from './styles';
import { useEffect,useState } from 'react';
import { Container,Grid,Grow,AppBar,TextField , Button } from '@mui/material';
import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts,getPostsBySearch} from '../../actions/posts'
import Pagination from '../Pagination';
import Paper from '@mui/material/Paper';
import { useNavigate,useLocation } from 'react-router-dom';
import { MuiChipsInput } from 'mui-chips-input'



function useQuery() {
  return new URLSearchParams(useLocation().search);
}



function Home() {
  const navigate = useNavigate();
    const [currentId, setCurrentId] = useState(null);
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
 
  const page = query.get('page') || 1;
  console.log(page);
  const searchQuery = query.get('searchQuery');

  const handleKeyPress = (e) => {
   if(e.key==='Enter'){
     searchPost();
   }
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch,currentId])

  const searchPost = () => {
    if(search.trim() || tags){
      dispatch(getPostsBySearch({search,tags:tags.join(',')}));
      navigate(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    }
    else{
      navigate('/');
    }
  }
  
  return (
    <Grow in>
        <Container maxWidth="xl">
          <Grid
          container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6}  md={9}>
              <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField
                name="search"
                variant="outlined"
                label="Search Memories"
                // ON Enter key
               onKeyUp={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />

                <MuiChipsInput
                style={{margin:'10px 0'}}

                value={tags}
                onAddChip={(chip) => setTags([...tags, chip])}
                onDeleteChip={(chip, index) => setTags(tags.filter((c) => c !== chip))}
               
                
                label="Search Tags"
                fullWidth
                 
                />

                <Button onClick={searchPost} variant="contained" color="primary" style={{marginTop:'10px'}}>Search</Button>

              </AppBar>

              <Form  currentId={currentId} setCurrentId={setCurrentId}   />
               
               <Paper  
                className={classes.pagination}
               elevation={6}>

                  <Pagination  page={page}/>
                </Paper>


            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}

export default Home
