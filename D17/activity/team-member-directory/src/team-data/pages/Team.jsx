import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';

const Team = () => {
    const team = [
        {
            id: 1,
            first_name: 'Cesar',
            last_name: 'Francisco',
            email: 'princexcesar@gmail.com',
            role: 'Admin'
        },
        {
            id: 2,
            first_name: 'Kathleen Ann',
            last_name: 'Garcia',
            email: 'kalits23@gmail.com',
            role: 'Admin'
        },
        {
            id: 3,
            first_name: 'Luan Akio',
            last_name: 'Francisco',
            email: 'luan.akio@gmail.com',
            role: 'User'
        },
    ];

    const [teamMemberIndex, setTeamMemberIndex] = useState(null);

    const handleTeamMemberClick = (e, index) => {
        e.preventDefault();
        setTeamMemberIndex(teamMemberIndex === index ? null : index);
    }

    return (
        <div className="team-member-container">
            <div>
                <h1>Team Members</h1>
                <ul>
                    {team.map((member, index) => (
                        <li key={index}>
                            <Nav.Link href={`/team/${member.id}`} onClick={(e) => handleTeamMemberClick(e, index)}>
                                {member.first_name} {member.last_name}
                            </Nav.Link>
                            {teamMemberIndex === index && (
                                <ul>
                                    <li>Email: {member.email}</li>
                                    <li>Role: {member.role}</li>
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Team
