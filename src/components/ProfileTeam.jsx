import React from 'react'
import useFetcher from '../hooks/useFetcher'
import Loading from './Loading'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

function ProfileTeam() {
    let { idTeam } = useParams();
    const history = useHistory();
    const dispatch = useDispatch()

    const [error, loading, data] = useFetcher(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)

    if (loading || !data.teams) return <Loading />

    const team = data.teams[0]

    const addToFavorite = () => {
        history.push('/favorite')
        dispatch({
            type: 'FAVORITE_TEAM',
            msg: [
                {
                    name: team.strTeam,
                    logo: team.strTeamBadge
                }
            ]
        })
    }

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
                        {team.strDescriptionEN}
                    </div>
                    {/* <div className="favorite">
                        <button className="btn btn-primary" onClick={() => addToFavorite()}>ADD TO FAVORITE</button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default ProfileTeam