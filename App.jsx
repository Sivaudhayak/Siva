import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import { TextField } from '@mui/material';

function App() {
  const [count, setCount] = useState(0)

  return(
    <div c lassName="App">
      <div class="b">
         
      <TextField id="outlined-basic" label="UserName" variant="outlined" />
      </div>
      <div className='c'>

      <TextField id="outlined-basic" label="Password" variant="outlined" />
      </div>
    </div>
    

  );
}

export default App;
