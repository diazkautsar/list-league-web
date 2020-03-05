import { SET_LEAGUE_NAME } from '../actionType'

const initialState ={
    league_name: 'FIND YOUR LEAGUE'
}

export function leagueName (state = initialState, action) {
    if (action.type === SET_LEAGUE_NAME) {
        return { ...state, league_name: action.payload }
    }

    return state
}