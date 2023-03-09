import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { checkRedux } from './middlewares/check';
import rootReducer from './rootReducer';

// create multiple middlewares
const middlewares = [checkRedux, thunk];

// create only store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

// export me
export default store;
