import React from 'react';
import axios from 'axios'

import TeamList from './TeamList'

export default class CardEPL extends React.Component {
    state = {
        list: [],
        clubs: []
    }

    handleSearchClub (param) {
        if (param == '') {
            this.setState({
                clubs: this.state.list
            })
        } else {
            const searchList = this.state.list
            const filter = searchList.filter(club => club.strTeam.toLowerCase().includes(param.toLowerCase()))
            this.setState({
                clubs: filter
            })

        }
    }

    league (e, id) {
        e.preventDefault()
        // console.log(id)
        axios({
            url: "https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=" + id,
            method: 'get'
        })
            .then(({ data }) => {
                this.setState({
                    list: data.teams,
                    clubs: data.teams
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <>
                <h1>CHOOSE YOUR LEAGUE</h1>
                <form className="league">
                    <button onClick={(e) => this.league(e, 4335)}>SPANISH LEAGUE</button> | 
                    <button onClick={(e) => this.league(e, 4328)}>ENGLISH PREMIER LEAGUE</button> | 
                    <button onClick={(e) => this.league(e, 4332)}>SERIE A</button>
                </form>
                <form>
                    <input type="text" onChange={(club) => this.handleSearchClub(club.target.value)}/>
                </form>
                <div className="container">
                    {this.state.clubs.map((listed) => {
                        return <TeamList listed={listed} key={listed.idTeam}/>
                    })}
                </div>
            </>
        )
    }
}