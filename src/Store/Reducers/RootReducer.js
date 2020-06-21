import { combineReducers } from "redux";
import NewsReducer from './NewsTitle';
import AuthorReducer from './Author';
import UserReducer from './User';

const RootReducer = combineReducers({
  newsTitle: NewsReducer,
  newAuthor: AuthorReducer,
  users: UserReducer,
});

export default RootReducer;
