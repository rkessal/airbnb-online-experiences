import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card'
import cardData from './data'

function App() {
  console.log(cardData)
  const cards = cardData.map(card => {
    return (
      <Card 
        key={card.id}
        card={card}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className='cards-list'>
        {cards}
      </div> 
    </div>  
  );
}

export default App;
