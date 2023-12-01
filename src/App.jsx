import './App.css'
import Card from './components/Card';
import dataJson from './data.json';
import { useState } from 'react';
import Header from './components/Header';
import Inputs from './components/Inputs';
// import Button from './components/Button';
import SelectedJob from './components/SelectedJob';

const PAGE_SIZE = 12;

function App() {
  const [cards, setCards] = useState(dataJson);
  const [allCards] = useState(dataJson);
  const [selectedJob, setSelectedJob] = useState();

  function onJobClick(id) {
    const job = cards.find(c => c.id === id);
    setSelectedJob(job);
  }

  // function onLoadMoreClick() {
  //   setCards(cards => [...cards, ...dataJson.slice(cards.length)]);
  // }

  function filterCards(position, location, fullTime) {
    let result = allCards
      .filter(c => c.position.indexOf(position) > -1)
      .filter(c => c.location.indexOf(location) > -1)
      .filter(c => !fullTime || fullTime && c.contract === "Full Time");

      setCards(result);
  }

  function renderContent() {
    if (selectedJob) {
      return <SelectedJob job={selectedJob}/>

    }
    else {
      return <div>
          <Inputs onSearch={filterCards} />
          
          <div className='container cards-container'>
              {cards.map((card) => {
                return (
                  <Card key={card.id} {...card} onClick={onJobClick}/>
                )
              })}
          </div>
          
          {/* { dataJson.length !== cards.length &&
            <div className='load-more_button container'>
              <Button primary onClick={onLoadMoreClick}>Load More</Button>
            </div>
          } */}
          
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
