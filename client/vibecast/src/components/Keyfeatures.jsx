import React from 'react'
import '/src/pages/LandingPage/LandingPage.css';


function Keyfeatures() {
  return (
    <div className='keyfeat'>
      <h1 className="keyf">Key Features</h1>
      <p className='keyf1'>Powerful analytics to help you understand your audience better</p>

      <div className="grid sm:grid-cols-2 gap-5">
        <div className='feat'>
            <img src="/src/assets/analytics.svg" alt="" />
        </div>
        <div className='feat'>
            <img src="/src/assets/engagement.svg" alt="" />
        </div>
        <div className='feat'>
            <img src="/src/assets/audience.svg" alt="" />
        </div>
        <div className='feat'>
            <img src="/src/assets/growth.svg" alt="" />
        </div>
      </div>
      <p className="keynote">*All this are Dummy data. Sign in to analyze your own audience.</p>
    </div>
  )
}

export default Keyfeatures
