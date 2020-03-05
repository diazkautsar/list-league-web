import { SET_LEAGUE_NAME } from '../actionType'

export const leagueName = (value) => {
    return {
        type: SET_LEAGUE_NAME,
        payload: value
    }
}