import React from 'react';
import { Nav } from 'react-bootstrap';

const Team = ({ team }) => {
    return (
        <div className="team-member-container">
            <div>
                <h1>Team Members</h1>
                <ul>
                    {team.map((member, index) => (
                        <li key={index}>
                            <Nav.Link href={`/team/${member.id}`}>
                                {member.first_name} {member.last_name}
                            </Nav.Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Team
