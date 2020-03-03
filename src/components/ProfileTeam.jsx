import React from 'react'
import useFetcher from '../hooks/useFetcher'
import Loading from './Loading'

function ProfileTeam (props) {
    const [error, loading, data] = useFetcher(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${props.profileTeam}`)
    
    
    if (loading || !data.teams) {
        return <Loading/>
    }
    const team = data.teams[0]
    
    return (
        <>
            <div className="Profile">
                <div className="Profile-Logo">
                    <img src={team.strTeamBadge}></img>
                </div>
                <div className="Profile-Stadium">
                    <img src={team.strStadiumThumb}></img>
                </div>
                <div className="Profile-Jersey">
                    <img src={team.strTeamJersey}></img>
                </div>
            </div>
        </>
    )
}

export default ProfileTeam