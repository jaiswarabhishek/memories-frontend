import * as api from '../api';


// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });

    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log(data);
        dispatch({ type: 'CREATE', payload: data });
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