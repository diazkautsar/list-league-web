import React from 'react'
import useFetcher from '../hooks/useFetcher'

export default function ListLeague (props) {
    function ListAllTeam(id) {
        props.setPage('teams')
        props.setAllTeam(id)
    }

    return (
        <div className="list" onClick={() => ListAllTeam(props.listed.idLeague)}>
            {props.listed.strLeague}
        </div>
    )

}