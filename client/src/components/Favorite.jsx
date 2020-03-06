import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getFavorite, removeFromFavorite } from '../store/actionCreators/favoriteCreator'

import Loading from '../components/Loading'

export default function Favorite() {
    const favoriteTeam = useSelector(state => state.favorite.favorite)
    const loading = useSelector(state => state.favorite.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavorite())
    }, [])

    const handleRemoveFromFavorite = (value) => {
        dispatch(removeFromFavorite(value))
    }

    if (loading) return <Loading />

    if (favoriteTeam.length < 1) return <h1>Nothing Favorite</h1>

    return (
        <>
            <h1>YOUR FAVORITE TEAM</h1>
            <div className="card-list-team">
                {favoriteTeam.map((team) => {
                    return (
                        <div className="list-fav" key={team.id}>
                            <Link to={`favorite/${team.id}`}>
                                <div className="TeamName" style={{ fontWeight: "bold" }}>
                                    {team.name}
                                </div>
                                <div className="logo-favorite">
                                    <img src={team.logo} alt=""></img>
                                </div>
                            </Link>
                            <div className="remove" style={{ marginTop: "20px" }}>
                                <button className="btn btn-success" onClick={() => handleRemoveFromFavorite(team.id)}>Remove From Favorite</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}