import React, { useState } from 'react';

import useFetcher from '../hooks/useFetcher'
import Loading from './Loading';
import Error from './Error'

import ListLeague from './ListLeague'

export default function Leagues(props) {
    const [error, loading, data] = useFetcher('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    const [filteredLeague, setFilteredLeague] = useState([])
    const [inputLeague, setInputLeague] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const filterLeague = () => {
        setIsSearching(true)
        const {leagues} = data
        const keyword = leagues.filter(league => league.strLeague.toLowerCase().includes(inputLeague.toLowerCase()))
        setFilteredLeague(keyword)
    }

    if (loading || !data.leagues) return <Loading/>

    if (error) return <Error />

    if (filteredLeague.length < 1 && isSearching) {
        setTimeout(() => {
            setIsSearching(false)
        }, 500)
        return <h1>Not Found</h1>
    }

    return (
        <>
            <div className="search-league">
                <input 
                type="text" 
                placeholder="Search League" 
                onChange={(e) => setInputLeague(e.target.value)} 
                /><br/>
                <button className="btn btn-warning mt-2" onClick={filterLeague}>SEARCH</button>
            </div>
            <div className="league">
                {
                    filteredLeague.map((listed) => {
                        return <ListLeague listed={listed} key={listed.strLeague} setAllTeam={props.setAllTeam}/>
                    })
                }
            </div>
        </>
    )
}