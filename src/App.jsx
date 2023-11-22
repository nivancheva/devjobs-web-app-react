import './App.css'
import Card from './components/Card';
import dataJson from './data.json';
import { useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';

function App() {
  const [cards] = useState(dataJson);
  const [selectedJob, setSelectedJob] = useState();

  function onJobClick(id) {
    const job = cards.find(c => c.id === id);
    setSelectedJob(job);
  }

  return (
    <div className='wrapper'>

      <Header />
      {
        selectedJob ?
          <h1>{selectedJob.position}</h1>
          :
          <div>
            <Inputs />
            
            <div className='container cards-container'>
                {cards.map((card) => {
                  return (
                    <Card key={card.id} {...card} onClick={onJobClick}/>
                  )
                })}
            </div>
          </div>
      }

        
    </div>
  )
}

export default App
