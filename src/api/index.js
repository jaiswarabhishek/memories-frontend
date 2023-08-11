import axios from 'axios';
import baseUrl from '../baseUrl';



axios.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchPost = (id) => axios.get(`${baseUrl}/posts/post/${id}`);   
export const fetchPosts = (page) => axios.get(`${baseUrl}/posts?page=${page}`);
export const fetchPostsBySearch = (searchQuery) => axios.get(`${baseUrl}/posts/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`);
export const createPost = (newPost) => axios.post(`${baseUrl}/posts`,newPost);
export const updatePost = (id,updatedPost) => axios.patch(`${baseUrl}/posts/${id}`,updatedPost);
export const deletePost = (id) => axios.delete(`${baseUrl}/posts/${id}`);
export const likePost = (id) => axios.patch(`${baseUrl}/posts/${id}/likePost`);

export const signIn = (formData) => axios.post(`${baseUrl}/user/signin`,formData);
export const signUp = (formData) => axios.post(`${baseUrl}/user/signup`,formData);

