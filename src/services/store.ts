import { rootReducer } from "./reducers/";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  FEED_CONNECTION_INIT,
  FEED_CONNECTION_SUCCESS,
  FEED_CONNECTION_CLOSED,
  FEED_CONNECTION_ERROR,
  FEED_GET_MESSAGE,
  FEED_CONNECTION_CLOSE,
} from "./action/ws-feed";
import { socketMiddleware } from "./middleware/socketMiddleware";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const feedWsActions = {
  wsInit: FEED_CONNECTION_INIT,
  wsClose : FEED_CONNECTION_CLOSE,
  onOpen: FEED_CONNECTION_SUCCESS,
  onClose: FEED_CONNECTION_CLOSED,
  onError: FEED_CONNECTION_ERROR,
  onMessage: FEED_GET_MESSAGE,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(feedWsActions)));

const store = createStore(rootReducer, enhancer);

export default store;
