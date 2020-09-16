import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';

import { IBlogPost } from '../../model/types';

import { Context } from '../context/BlogContext';

import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, updateBlogPost } = useContext(Context);

  const blogPost: IBlogPost = state.find(
    (blogPost: IBlogPost) => blogPost.id === id
  );

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        updateBlogPost(id, title, content, () => navigation.pop())
      }
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;
