import React from 'react'
import { FaYoutube } from 'react-icons/fa';
import insight from '/src/assets/insight.svg';
import smart from '/src/assets/smart.svg';
import { LinkIcon, ArrowRight, BarChart3Icon, TrendingUp} from 'lucide-react';




const Card = () => {
  return (
    <div className='grid md:grid-cols-3 gap-2 pr-8 pl-8'>
        <section className='workcard'>
            <div className='icon'>
                <LinkIcon className='text-white h-9 w-9' />
            </div>
            <p className="step1">Step 1: Connect Channel</p>
            <p className='step'>Link your YouTube channel with just a few clicks.</p>
            <div className='linking'>
                <LinkIcon className='h-8 w-8' />
                <ArrowRight className='h-8 w-8'/>
                <FaYoutube className='text-red-500 h-10 w-10'/>
            </div>
        </section>
        <section className='workcard'>
            <div className='icon'>
                <BarChart3Icon className='text-white w-9 h-9'/>
            </div>
            <p className="step1">Step 2: View Insights</p>
            <p className='step'>Get AI-powered analytics on sentiment, engagement, and trending topics.</p>
            <div className='linking'>
                <img src={ insight } alt="" />
            </div>
        </section>
        <section className='workcard'>
        <div className='icon'>
            <TrendingUp className='text-white h-9 w-9'/>
        </div>
        <p className="step1">Step 3: Grow Smarter</p>
        <p className='step'>Use data-driven insights to optimize your content and engage your audience.</p>
        <div className='linking'>
            <TrendingUp className='h-9 w-9 text-[#558E85]'/>
            <img src={smart} alt="" srcset="" />
        </div>
     </section>
    </div>
  )
}

export default Card