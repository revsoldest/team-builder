import React from 'react';

const TeamList = props => {
    return (
        <div>
            {props.teamList.map(member => {
                return (
                    <div className="App-div" key = {member.id}>
                        <br />
                    <h2>{member.name}</h2>
                    <p>{member.role}</p>
                    <p>{member.email}</p>
                        <br />
                        <hr />
                    </div>
                )
            })}
        </div>
    )
}

export default TeamList;