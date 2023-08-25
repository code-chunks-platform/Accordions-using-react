import { useState } from 'react';
import Accordion from './components/Accordion'
import Data from './components/Data'
import './App.css'


function App() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
       <div className="container">
        <div>
          <h1 id="heading">React Accordion</h1>
        </div>

        {Data.map((data, index) => (
          <Accordion
            key={data.id}
            question={data.question}
            description={data.description}
            isActive={index === activeIndex}
            onClick={() => handleAccordionClick(index)}
          />
        ))}
      </div>
      
    </>
  )
}

export default App
