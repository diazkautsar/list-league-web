import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getFavorite } from '../store/actionCreators/favoriteCreator'

import Loading from '../components/Loading'

export default function Favorite() {
    const favoriteTeam = useSelector(state => state.favorite.favorite)
    const loading = useSelector(state => state.favorite.loading)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getFavorite())
    }, [])
    
    if (loading) return <Loading />

    if (favoriteTeam.length < 1) return <h1>Nothing Favorite</h1>

    return (
        <div className="card-list-team">
            {favoriteTeam.map((team) => {
                return (
                    <>
                        <div className="list-team" key={team.id}>
                            <div className="TeamName" style={{fontWeight: "bold"}}>
                                {team.name}
                            </div>
                            <div className="logo">
                                <img src={team.logo} alt=""></img>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}