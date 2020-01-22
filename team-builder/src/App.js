import React, { useState } from 'react';
import './App.css';

import Form from './Components/Form';
import TeamList from './Components/TeamList';
import data from './Data';

function App() {
  const [members, setMembers] = useState(data);
  const addNewPerson = person => {
    setMembers([...members, person])
  }

  return (
    <div className="App">
      <header className="App-header">
        <TeamList teamList={members} />
        <Form addNewPerson={addNewPerson} />
      </header>
    </div>
  );
}

export default App;
