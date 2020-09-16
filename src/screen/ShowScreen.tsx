import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { IBlogPost } from '../../model/types';

import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);

  const blogPost: IBlogPost = state.find(
    (blogPost: IBlogPost) => blogPost.id === id
  );

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <EvilIcons name="pencil" size={30} />
      </TouchableOpacity>
    )
  };
};

const style = StyleSheet.create({});

export default ShowScreen;
