import React from 'react';

const TeamMember = props => {
    
    return (
        <>
        {props.member.map(member =>{
            return(
                <div className="card" key={member.id}>
                    <h3>{member.name}</h3>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </div>
                );
            })
        }
       </> 
    )
};

export default TeamMember;
