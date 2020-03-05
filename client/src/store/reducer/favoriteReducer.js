import { SET_LOADING, SET_STATE_FAVORITE, IS_FAVORITE_TEAM } from "../actionType"

const initialState = {
    favorite: [],
    loading: false,
    error: null,
    isFavoriteTeam: false
}

export function favorite (state = initialState, action) {
    if (action.type === SET_LOADING) {
        return { ...state, loading: action.payload }
    }

    if (action.type ===  SET_STATE_FAVORITE) {
        return { ...state, favorite: action.payload }
    }

    if (action.type === IS_FAVORITE_TEAM) {
        return { ...state, isFavoriteTeam: action.payload }
    }

    return state
} 