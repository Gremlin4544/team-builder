import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import TeamMember from './components/team-list';

function App() {
  const [members, setMembers] = useState([
    {
      id: 0,
      name: "Sherlock Holmes",
      email: "KnoItAll@me.com",
      role: "Case Solver"
    },
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email:member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

return (
  <div className="App">
     <div className= "App-header" >
    <h1>Team-Builder</h1>
    </div>

    <div  className= "App-link">
    <Form addNewMember={addNewMember} />
    </div>
   
    <TeamMember member={members} />
    
  </div>
  );
}

export default App;
