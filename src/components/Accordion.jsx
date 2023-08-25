/* eslint-disable react/prop-types */
import './Accordion.css'

const Accordion = ({ question, description, isActive, onClick }) => {
  return (
    <>
    <div className='items'>
      <div className="accordion-question" onClick={onClick}>
        {question}
        <span>{isActive ? "-" : "+"}</span>
      </div>

      <div className={`accordion-description 
      ${isActive ? "active" : ""}`}>
        {description}
      </div>
    </div>
    </>
  )
}

export default Accordion;