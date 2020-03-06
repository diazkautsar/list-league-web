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
                    <div className="nav-center">
                        <div><button onClick={() => value.changeColor('red')} className="btn btn-danger">RED</button></div>
                        <div className="mr-3 ml-3">{titleNavbar}</div>
                        <div><button onClick={() => value.changeColor('black')} className="btn btn-dark">BLACK</button></div>
                    </div>
                    <div><Link className="nav-home" onClick={handleChangeHeader} to="/favorite" >FAVORITE</Link></div>
                </nav>
            )}
        </NavbarColor.Consumer>
    )
}