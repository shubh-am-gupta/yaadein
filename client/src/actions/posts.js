import * as actionType from "../actionTypes/actionTypes";
import * as api from "../api";

// Action Creators
export const getPosts = () => async dispatch => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: actionType.FETCH_ALL, payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

export const createPost = post => async dispatch => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: actionType.CREATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = (id, post) => async dispatch => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: actionType.UPDATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = id => async dispatch => {
  try {
    await api.deletePost(id);

    dispatch({ type: actionType.DELETE, payload: id });
  } catch (err) {
    console.log(err);
  }
};

export const likePost = id => async dispatch => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: actionType.UPDATE, payload: data });
  } catch (err) {
    console.log(err);
  }
};
