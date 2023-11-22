import './App.css'

import Button from './components/Button';
import Checkbox from './components/Checkbox';
import Card from './components/Card';
import dataJson from './data.json';
import { useState } from 'react';
import Header from './components/Header';

function App() {
  const [cards] = useState(dataJson);

  return (
    <div>
      <Header />
      {/* <Button primary>Apply now</Button> */}
      
      {/* <Checkbox /> */}
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
