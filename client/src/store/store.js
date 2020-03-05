import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { leagueName } from './reducer/leagueNameReducer'
import { favorite } from './reducer/favoriteReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers ({
        leagueName,
        favorite
    }),
    composeEnhancers (
        applyMiddleware (
            thunk
        )   
    )
)