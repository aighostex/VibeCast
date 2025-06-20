import React from 'react'
import '/src/pages/LandingPage/LandingPage.css';


const Card = () => {
  return (
    <div className='workcards'>
        <section className='workcard'>
            <div className='icon'>
                <img src='/src/assets/Link.svg' alt="" srcset="" />
            </div>
            <p className="step1">Step 1: Connect Channel</p>
            <p className='step'>Link your YouTube channel with just a few clicks.</p>
            <div className='linking'>
                <img src="/src/assets/linkblack.svg" alt="" />
                <img src="/src/assets/arrow_outward.svg" alt="" srcset="" />
                <img src="/src/assets/youtube.svg" alt="" />
            </div>
        </section>
        <section className='workcard'>
            <div className='icon'>
                <img src='/src/assets/chart.svg' alt="" srcset="" />
            </div>
            <p className="step1">Step 2: View Insights</p>
            <p className='step'>Get AI-powered analytics on sentiment, engagement, and trending topics.</p>
            <div className='linking'>
                <img src="/src/assets/insight.svg" alt="" />
            </div>
        </section>
        <section className='workcard'>
        <div className='icon'>
            <img src='/src/assets/Trendingup.svg' alt="" srcset="" />
        </div>
        <p className="step1">Step 3: Grow Smarter</p>
        <p className='step'>Use data-driven insights to optimize your content and engage your audience.</p>
        <div className='linking'>
            <img src="/src/assets/trend.svg" alt="" />
            <img src="/src/assets/smart.svg" alt="" srcset="" />
        </div>
     </section>
    </div>
  )
}

export default Card