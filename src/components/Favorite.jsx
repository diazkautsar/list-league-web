import React from 'react'
import { useSelector } from 'react-redux'

export default function favorit() {
    const favoriteTeam = useSelector(state => state.favoriteTeam)   

    if (favoriteTeam.length < 1) return <h1>Nothing Favorite</h1>

    return (
        <div className="card-list-team">
            {favoriteTeam.map((team) => {
                return (
                    <>
                        <div className="list-team">
                            <div className="TeamName">
                                {team.name}
                            </div>
                            <div className="logo">
                                {team.logo}
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}