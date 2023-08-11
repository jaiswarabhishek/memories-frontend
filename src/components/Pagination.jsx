import React from 'react'
import { useState,useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import { PaginationItem } from '@mui/material';
import styles from './styles'
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { getPosts } from '../actions/posts';
function Paginate({page}) {
    const classes = styles();
    const dispatch = useDispatch();

const {numberOfPages} = useSelector((state) => state.posts);

    console.log(numberOfPages)

    useEffect(() => {
        if(page) dispatch(getPosts(page));

    }, [page])


    console.log(numberOfPages)
  return (
   <Pagination
    classes={{ ul: classes.ul }}
    count={numberOfPages}
    page={Number(page) || 1}
    variant="outlined"
    color="primary"
    renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`} />
        )}
    />
  )
}


export default Paginate
