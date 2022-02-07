import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { buttonReducer } from '../reducers/buttonReducer';
import { noticeReducer } from '../reducers/noticeReducer';
import { selectReducer } from '../reducers/selectReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    button: buttonReducer,
    select: selectReducer,
    notice: noticeReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);