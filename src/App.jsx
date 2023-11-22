import './App.css'
import Toggle from './components/Toggle';
import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Card from './components/Card';
import dataJson from './data.json';
import { useState } from 'react';

function App() {
  const [cards] = useState(dataJson);

  return (
    <div className='to_remove'>
      <Button primary>Apply now</Button>
      <Toggle />
      <Checkbox />
      <div className='cards-container'>
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
