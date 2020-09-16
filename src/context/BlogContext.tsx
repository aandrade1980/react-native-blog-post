import { Dispatch } from 'react';
import jsonServer from '../api/jsonServer';

import createDataContext from './createDataContext';

import { IBlogPost, BlogPostActionTypes } from '../../model/types';

const blogReducer = (state: IBlogPost[], action: BlogPostActionTypes) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'delete_blogpost':
      return state.filter(blogpost => blogpost.id !== action.payload);
    case 'update_blogpost':
      return state.map(blogPost =>
        blogPost.id === action.payload.id ? action.payload : blogPost
      );
    default:
      return state;
  }
};

const getBlogPosts = (dispatch: Dispatch<BlogPostActionTypes>) => async () => {
  const response = await jsonServer.get('/blogposts');

  dispatch({ type: 'get_blogposts', payload: response.data });
};

const addBlogPost = () => async (
  title: string,
  content: string,
  callback: () => void
) => {
  await jsonServer.post('/blogposts', { title, content });
  callback();
};

const deleteBlogPost = (dispatch: Dispatch<BlogPostActionTypes>) => async (
  id: string
) => {
  await jsonServer.delete(`/blogposts/${id}`);
  dispatch({ type: 'delete_blogpost', payload: id });
};

const updateBlogPost = (dispatch: Dispatch<BlogPostActionTypes>) => async (
  id: string,
  title: string,
  content: string,
  callback: () => void
) => {
  await jsonServer.put(`/blogposts/${id}`, { title, content });
  dispatch({ type: 'update_blogpost', payload: { id, title, content } });
  callback();
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts },
  []
);
