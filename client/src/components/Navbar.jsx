import React from 'react'
import {
    Link
} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { leagueName } from '../store/actionCreators/leagueNameCreator'
import NavbarColor from '../context/navbarColorContext'

export default function Navbar() {
    const titleNavbar = useSelector(state => state.leagueName.league_name)
    const dispatch = useDispatch();

    const handleChangeHeader = () => {
        dispatch(leagueName('FIND YOUR LEAGUE'))
    }

    return (
        <NavbarColor.Consumer>
            {value => (
                <nav style={{backgroundColor: value.color}}>
                    <div><Link className="nav-home" onClick={handleChangeHeader} to="/">HOME</Link></div>
                    <div>{titleNavbar}</div>
                    <div><Link className="nav-home" to="/favorite" >FAVORITE</Link></div>
                </nav>
            )}
        </NavbarColor.Consumer>
    )
}