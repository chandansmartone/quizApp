import './App.css';
import data from './data.json'
import Start from './components/Start';
import Questions from './components/Questions/Questions';
import { useState } from 'react';

function App() {
  const [start,setStart]=useState(false)
  // eslint-disable-next-line
  const [questions,setQuestions]=useState(data)
  const handlestart=(val)=>{
    setStart(val)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        {!start&&<Start handlestart={handlestart}/>}
        {start&&<Questions questions={questions}/>}
      </header>
    </div>
  );
}

export default App;
