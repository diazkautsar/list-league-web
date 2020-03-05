import { ADD_NUMBER, LEAGUE_NAME, FAVORITE_TEAM } from './actionType'

const initialState = {
    counter: 0,
    league_name: 'FIND YOUR LEAGUE',
    favoriteTeam: []
}

export default function redux (state = initialState, action) {
    if (action.type === ADD_NUMBER) {
        return {...state, counter: state.counter + 1}
    } else if (action.type === LEAGUE_NAME) {
        return {...state, league_name: action.msg}
    } else if (action.type === FAVORITE_TEAM) {
        return {...state, favoriteTeam: state.favoriteTeam.concat(action.msg)}
    }

    return state
}