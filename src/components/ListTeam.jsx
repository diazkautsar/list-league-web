import React from 'react';
import useFetcher from '../hooks/useFetcher';
import Loading from './Loading';

export default function ListTeam (props) {
    const [error, loading, data] = useFetcher('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=' + props.allTeam)

    if (loading || !data.teams) {
        return <Loading />
    }

    function ProfileTeam (param) {
        props.setPage('profile')
        props.setProfileTeam(param)
    }

    // masih belum berfungsi.

    // let AllTeam = data.teams

    // function handleSearchClub(param) {
    //     if (param == '') {
    //         AllTeam = data.teams
    //     } else {
    //         const searchTeam = data.teams
    //         const filter = searchTeam.filter(team => team.strTeam === param)
    //         AllTeam = filter
    //     }
    // }

    return (
        <>
            {/* <form>
                <input type="text" onChange={(event) => handleSearchClub(event.target.value)}/>
            </form> */}
            {data.teams.map((team) => {
                return (
                    <div className="list" key={team.idTeam} onClick={() => ProfileTeam(team.idTeam)}>
                        <div className="TeamName">
                            {team.strTeam}
                        </div>
                        <div className="logo">
                            <img src={team.strTeamBadge}></img>
                        </div>
                        <div className="Stadion-Name">
                            {team.strStadium}
                        </div>
                    </div>
                )
            })}
        </>
    )
}