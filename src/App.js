import './App.css';
import { Button } from '@mui/material';
import { useState } from 'react';
import { ComputerScience, Electrical, Mechanical, BioTech } from './pages/data';
import { Stack } from '@mui/material';

function App() {
  const [dept, setDept] = useState(ComputerScience)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <Stack direction='row' spacing={5}>
        <h3>KL University</h3>
        <Button variant="outlined" size='large' margin={5} color="secondary" onClick={() => changeView(ComputerScience)} >CSE</Button>
        <Button variant="outlined" size='large' margin={5} color="secondary" onClick={() => changeView(Electrical)} >ECE</Button>
        <Button variant="outlined" size='large' margin={5} color="secondary" onClick={() => changeView(Mechanical)} >MECH</Button>
        <Button variant="outlined" size='large' margin={5} color="secondary" onClick={() => changeView(BioTech)} >BT</Button>
      </Stack>
      <img src={dept[0].imageUrl} alt="" style={{ width: "100%" }} height='250' />
      <h1>{dept[0].displayName}</h1>
      <p>{dept[0].description} </p>
      <p>HOD:{dept[0].hod}</p>
      <h4 style={{ textAlign: "left" }}>Programs Offered:</h4>
      <p style={{ textAlign: "left" }} >{dept[0].programsOffered}</p>
    </div >
  );
}

export default App;
