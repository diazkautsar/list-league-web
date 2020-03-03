import React, { useState } from 'react';
import useFetcher from '../hooks/useFetcher'
import Loading from "./Loading";

import ListLeague from './ListLeague'

export default function Leagues(props) {
    const [error, loading, data] = useFetcher('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    
    if (loading || !data.leagues) {
        return <Loading/>
    }
    
    return (
        <>  
            <div className="league">
                {
                    data.leagues.map((listed) => {
                        return <ListLeague listed={listed} key={listed.strLeague} setPage={props.setPage} setAllTeam={props.setAllTeam}/>
                    })
                }
            </div>
        </>
    )
}