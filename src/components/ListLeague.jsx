import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'

export default function ListLeague (props) {
    let history = useHistory();
    const dispatch = useDispatch();

    function ListAllTeam(id) {
        props.setAllTeam(id)
        history.push(`/${id}`)
        dispatch({
            type: 'LEAGUE_NAME',
            msg: `${props.listed.strLeague}`
        })
    }

    return (
        <div className="list" onClick={() => ListAllTeam(props.listed.idLeague)}>
            {props.listed.strLeague}
        </div>
    )

}