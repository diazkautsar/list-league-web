import React from 'react'
import {
    Link
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function Navbar() {
    const titleNavbar = useSelector(state => state.league_name)
    const dispatch = useDispatch();

    const handleChangeHeader = () => {
        dispatch({
            type: 'LEAGUE_NAME',
            msg: `FIND YOUR LEAGUE`
        })
    }

    return (
        <nav>
            <div><Link className="nav-home" onClick={handleChangeHeader} to="/">HOME</Link></div>
            <div>{titleNavbar}</div>
            <div>LOGIN</div>
        </nav>
    )
}