import React, { useEffect } from 'react'
import useFetcher from '../hooks/useFetcher'
import Loading from './Loading'
import Error from './Error'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addFavorite, checkFavoriteTeam } from '../store/actionCreators/favoriteCreator'

function ProfileTeam() {
    const { idTeam } = useParams();
    const dispatch = useDispatch();
    const loadingFromStore = useSelector(state => state.favorite.loading)
    const isFavoriteTeam = useSelector(state => state.favorite.isFavoriteTeam)
    const [error, loading, data] = useFetcher(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)

    useEffect(() => {
        dispatch(checkFavoriteTeam({
            idTeam
        }))
    }, [isFavoriteTeam])

    if (loading || !data.teams || loadingFromStore) return <Loading />

    if (error) return <Error />

    const team = data.teams[0]

    const addToFavorite = () => {
        dispatch(addFavorite({
            id: team.idTeam,
            name: team.strTeam,
            logo: team.strTeamBadge
        }))
        dispatch(checkFavoriteTeam({
            idTeam: team.idTeam
        }))
    }

    console.log(team)

    return (
        <>
            <div className="profile">
                <div className="profile-side-left">
                    <div className="up">
                        <div className="up-logo">
                            <img src={team.strTeamBadge} alt=""></img>
                        </div>
                        <div className="up-jersey">
                            <img src={team.strTeamJersey} alt=""></img>
                        </div>
                    </div>
                    <div className="down">
                        <img src={team.strStadiumThumb} alt=""></img>
                    </div>
                </div>
                <div className="profile-side-right">
                    <div className="desc">
                        <p align="justify">{team.strDescriptionEN}</p>
                    </div>
                    {isFavoriteTeam ? <div><i className="fas fa-heart" style={{fontSize: "20px"}}>YOUR FAVORITE TEAM</i></div> :
                        <div className="favorite">
                            <button className="btn btn-primary" onClick={() => addToFavorite()}>ADD TO FAVORITE</button>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ProfileTeam