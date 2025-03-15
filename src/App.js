import React from 'react'
import Form from './components/Form'
import "./styles/form.css";

const App = () => {
  return (
    <div className='container'>
      <div className='left-section'>
        <img src='/EZ Works Blue.png'/>
        <h2>Suite Of Business Support Services</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt...Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <Form />
      </div>
      <div className='right-section'>
        {[
          { title: "Presentation Design", icon: "/Research@4x-5@2x.png" },
          { title: "Audio - Visual Production", icon: "/Research@4x-2@2x.png" },
          { title: "Translation Services", icon: "/Research@4x-1@2x.png" },
          { title: "Graphic Design", icon: "/Research@4x-4@2x.png" },
          { title: "Research & Analytics", icon: "/Research@4x@2x.png" },
          { title: "Data Processing", icon: "/Research@4x-3@2x.png" }
        ].map((services, index) => (
          <div key={index} className='service-card'>
            <div className="service-header">
              <img src={services.icon} alt={services.title} />
              <h3>{services.title}</h3>
            </div>
            <p>Lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
