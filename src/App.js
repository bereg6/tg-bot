import React from 'react';
import Form from './components/form/form.jsx';
import './App.css';
import {addToDB} from './DB/db.js';

// export const db = [];
// export {data};



function App() {
  return (
    <div className="App">
      <div>
        <Form id='form' />
        <button onClick={addToDB}>Click</button>
      </div>
    </div>
  );
}

export default App;
