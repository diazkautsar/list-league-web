import React from 'react'
import axios from 'axios'

export default class TeamList extends React.Component {
    profileTeam(name) {
        // axios({
        //     url: `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${name}`,
        //     method: 'get'
        // })
        //     .then(({ data }) => {
        //         console.log(data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })
    }

    render() {
        return (
            <div className="TeamList" onClick={() => this.profileTeam(this.props.listed.strTeam)}>
                <div className="TeamName">
                    {this.props.listed.strTeam}
                </div>
                <div className="logo">
                    <img src={this.props.listed.strTeamBadge}></img>
                </div>
                <div className="Stadion-Name">
                    {this.props.listed.strStadium}
                </div>
            </div>
        )
    }
}