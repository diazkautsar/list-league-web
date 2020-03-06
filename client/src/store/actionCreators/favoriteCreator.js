import { 
    SET_LOADING, 
    SET_ERROR, 
    SET_STATE_FAVORITE, 
    IS_FAVORITE_TEAM 
} from "../actionType"
import Axios from "axios"


export const setLoading = (value) => {
    return {
        type: SET_LOADING,
        payload: value
    }
}

export const setError = (value) => {
    return {
        type: SET_ERROR,
        payload: value
    }
}

export const setFavorite = (value) => {
    return {
        type: SET_STATE_FAVORITE,
        payload: value
    }
}

export const getFavorite = () => {
    return function (dispatch) {
        dispatch(setLoading(true))
        
        Axios({
            method: 'get',
            url: 'http://localhost:3000/favorite'
        })
            .then(({ data }) => {
                dispatch(setFavorite(data))
            })
            .catch(err => {
                dispatch(setError('Invalid Server Error'))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const addFavorite = (value) => {
    return function (dispatch) {
        Axios({
            method: 'post',
            url: 'http://localhost:3000/favorite',
            data: {
                id: value.id,
                name: value.name,
                logo: value.logo
            }
        })
            .then(() =>{})
            .catch(err => {
                dispatch(setError('add to favorite failed'))
            })
    }
}

export const checkFavoriteTeam = (value) => {
    return function (dispatch) {
        Axios({
            method: 'get',
            url: 'http://localhost:3000/favorite?id=' + value.idTeam
        })
            .then(({ data }) => {
                if (data.length > 0) {
                    dispatch(setIsFavoriteTeam(true))
                } else {
                    dispatch(setIsFavoriteTeam(false))
                }
            })
            .catch(err => {
                console.log(err)
            })

    }
}

export const setIsFavoriteTeam = (value) => {
    return {
        type: IS_FAVORITE_TEAM,
        payload: value
    }
}

export const removeFromFavorite = (value) => {
    return function (dispatch) {
        Axios({
            method: 'delete',
            url: 'http://localhost:3000/favorite/' + value
        })
            .then(() => {
                console.log('berhasil di delete')
                dispatch(getFavorite())
            })
            .catch(err => {
                dispatch(setError('invalid server error'))
            })
    }
}