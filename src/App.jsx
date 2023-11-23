import './App.css'
import Card from './components/Card';
import dataJson from './data.json';
import { useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
import Button from './components/Button';
import SelectedJob from './components/SelectedJob';

const PAGE_SIZE = 12;

function App() {
  const [cards, setCards] = useState(dataJson.slice(0, PAGE_SIZE));
  const [selectedJob, setSelectedJob] = useState(dataJson[0]);

  function onJobClick(id) {
    const job = cards.find(c => c.id === id);
    setSelectedJob(job);
  }

  function onLoadMoreClick() {
    setCards(cards => [...cards, ...dataJson.slice(cards.length)]);
  }

  function renderContent() {
    if (selectedJob) {
      return <SelectedJob job={selectedJob}/>

    }
    else {
      return <div>
          <Inputs />
          
          <div className='container cards-container'>
              {cards.map((card) => {
                return (
                  <Card key={card.id} {...card} onClick={onJobClick}/>
                )
              })}
          </div>
          
          { dataJson.length !== cards.length &&
            <div className='load-more_button container'>
              <Button primary onClick={onLoadMoreClick}>Load More</Button>
            </div>
          }
          
        </div>;
    }
  }

  return (
    <div className='wrapper'>

      <Header />
      { renderContent() }

    </div>
  )
}

export default App
