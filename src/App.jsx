import './App.css'
import Card from './components/Card';
import dataJson from './data.json';
import { useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';

function App() {
  const [cards] = useState(dataJson);

  return (
    <div>
      <div className='header-input'>
        <Header />
      
        <Inputs />
      </div>
      
      
      <div className='container cards-container'>
          {cards.map((card, idx) => {
            return (
              <Card key={idx} {...card}/>
            )
          })}
        </div>
    </div>
  )
}

export default App
