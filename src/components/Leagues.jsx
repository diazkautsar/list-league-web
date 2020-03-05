import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import useFetcher from '../hooks/useFetcher'
import Loading from './Loading';

import ListLeague from './ListLeague'

export default function Leagues(props) {
    const [error, loading, data] = useFetcher('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
    const [filteredLeague, setFilteredLeague] = useState([])
    const [inputLeague, setInputLeague] = useState('')
    const [isSearching, setIsSearching] = useState(false)

    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const addCounter = () => {
        dispatch({
            type: 'ADD_NUMBER'
        })
    }

    const filterLeague = () => {
        setIsSearching(true)
        const {leagues} = data
        const keyword = leagues.filter(league => league.strLeague.toLowerCase().includes(inputLeague.toLowerCase()))
        setFilteredLeague(keyword)
    }

    if (loading || !data.leagues) return <Loading/>

    if (filteredLeague.length < 1 && isSearching) {
        setTimeout(() => {
            setIsSearching(false)
        }, 500)
        return <h1>Not Found</h1>
    }

    return (
        <>
            <div className="redux">
                <h4>
                    {counter}
                </h4>
                <button onClick={addCounter}>TRY REDUX</button>
            </div>
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