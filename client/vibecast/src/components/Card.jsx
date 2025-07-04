import React from 'react'
import { FaYoutube, FaArrowRight, FaChartBar,} from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { FaArrowTrendUp } from 'react-icons/fa6';



const Card = () => {
  return (
    <div className='grid md:grid-cols-3 gap-2 pr-8 pl-8'>
        <section className='workcard'>
            <div className='icon'>
                <FiLink className='text-white h-9 w-9' />
            </div>
            <p className="step1">Step 1: Connect Channel</p>
            <p className='step'>Link your YouTube channel with just a few clicks.</p>
            <div className='linking'>
                <FiLink className='h-8 w-8'/>
                <FaArrowRight className='text-black h-8 w-8'/>
                <FaYoutube className='text-red-500 h-10 w-10'/>
            </div>
        </section>
        <section className='workcard'>
            <div className='icon'>
                <FaChartBar className='text-white w-9 h-9' />
            </div>
            <p className="step1">Step 2: View Insights</p>
            <p className='step'>Get AI-powered analytics on sentiment, engagement, and trending topics.</p>
            <div className='linking'>
                <img src="/src/assets/insight.svg" alt="" />
            </div>
        </section>
        <section className='workcard'>
        <div className='icon'>
            <FaArrowTrendUp className='text-white h-9 w-9'/>
        </div>
        <p className="step1">Step 3: Grow Smarter</p>
        <p className='step'>Use data-driven insights to optimize your content and engage your audience.</p>
        <div className='linking'>
            <FaArrowTrendUp className='h-9 w-9 text-[#558E85]'/>
            <img src="/src/assets/smart.svg" alt="" srcset="" />
        </div>
     </section>
    </div>
  )
}

export default Card