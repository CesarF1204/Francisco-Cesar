import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const TeamDetails = ({ team }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const member = team.find(member => member.id === parseInt(id));

    if(!member) {
        return <h3 className="member-not-found">Member not found</h3>;
    }

    return (
        <div className="team-member-details">
            <div>
                <h1>Team Member Details:</h1>
                <ul>
                    <li><strong>Full Name:</strong> {member.first_name} {member.last_name}</li>
                    <li><strong>Email Address:</strong> {member.email}</li>
                    <li><strong>Role:</strong> {member.role}</li>
                </ul>
            </div>
            <button className="go-back-btn" onClick={() => navigate(-1)}>
                <FaArrowLeft className="left-arrow" /> Go Back
            </button>
        </div>
    );
};

export default TeamDetails
