import * as actionType from "../actionTypes/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case actionType.DELETE:
      return posts.filter(post => post._id !== action.payload);
    case actionType.UPDATE:
      return posts.map(post =>
        post._id === action.payload._id ? action.payload : post
      );
    case actionType.FETCH_ALL:
      return action.payload;
    case actionType.CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
};
