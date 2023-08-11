import * as api from '../api';


// Action Creators
export const getPosts = (page) => async (dispatch) => {
    try {
 
        dispatch({type:'START_LOADING'})
       
        const { data } = await api.fetchPosts(page);
        console.log(data);
       
        dispatch({ type: 'FETCH_ALL', payload: data });
        dispatch({type:'END_LOADING'})

    } catch (error) {
        console.log(error.message);
    }
}

//GetPost
export const getPost = (id) => async (dispatch) => {
    try {
        dispatch({type:'START_LOADING'})
        const { data } = await api.fetchPost(id);
        console.log(data);
        dispatch({ type: 'FETCH_POST', payload: data });
        dispatch({type:'END_LOADING'})

    } catch (error) {
        console.log(error.message);
    }
}

//GetPostBySearch
export const getPostsBySearch = (searchQuery) => async (dispatch) => {
    try {
        dispatch({type:'START_LOADING'})
        const { data: { data } } = await api.fetchPostsBySearch(searchQuery);
        console.log(data);
        dispatch({ type: 'FETCH_BY_SEARCH', payload: data });
        dispatch({type:'END_LOADING'})

    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        dispatch({type:'START_LOADING'})
        const { data } = await api.createPost(post);
        console.log(data);
        dispatch({ type: 'CREATE', payload: data });
        dispatch({type:'END_LOADING'})
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id,post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id,post);
        console.log(data);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        console.log(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
}


export const likePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.likePost(id);
        console.log(data);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}