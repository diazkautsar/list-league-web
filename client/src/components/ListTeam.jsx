import React from 'react';
import useFetcher from '../hooks/useFetcher';
import Loading from './Loading';

import { Link, useParams } from 'react-router-dom'

export default function ListTeam() {
    let { idLeague } = useParams();
    const [error, loading, data] = useFetcher(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`)

    if (loading || !data.teams) return <Loading />

    return (
        <div className="card-list-team">
            {data.teams.map((team) => {
                return (
                    <>
                        <Link to={`${idLeague}/${team.idTeam}`}>
                            <div className="list-team" key={team.idTeam}>
                                <div className="TeamName">
                                    {team.strTeam}
                                </div>
                                <div className="logo">
                                    <img src={team.strTeamBadge} alt=""></img>
                                </div>
                            </div>
                        </Link>
                    </>
                )
            })}
        </div>
    )
}