import React from 'react'
import analytics from '/src/assets/analytics.svg'
import engagement from '/src/assets/engagement.svg'
import audience from '/src/assets/audience.svg'
import growth from '/src/assets/growth.svg'


function Keyfeatures() {
  return (
    <div id='features' className='keyfeat pt-30'>
      <h1 className="keyf">Key Features</h1>
      <p className='keyf1'>Powerful analytics to help you understand your audience better</p>

      <div className="grid sm:grid-cols-2 gap-5 mt-5">
        <div className='feat'>
            <img src={analytics} alt="" />
        </div>
        <div className='feat'>
            <img src={engagement} alt="" />
        </div>
        <div className='feat'>
            <img src={audience} alt="" />
        </div>
        <div className='feat'>
            <img src={growth} alt="" />
        </div>
      </div>
      <p className="keynote">*All this are Dummy data. Sign in to analyze your own audience.</p>
    </div>
  )
}

export default Keyfeatures
