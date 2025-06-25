import React from 'react'
import { pricingPlans } from '../constants/pricingPlan';


const Pricing = () => {
    function classNames (...classes){
        return classes.filter(Boolean).join(" ");
    }
  return (
    <div className='text-center mt-40'>
      <h1 className='text-[60px] font-[800] text-[#1e1e1e]'>Simple, Transparent Pricing</h1>
      <p className='text-[32px] font-[500] text-[#6b6b6b]' >Choose the plan that's right for your creator journey</p>

      {/* plans */}
      <div className='grid grid-cols-3 gap-8 md:col-span-6 mr-20 ml-20 md:ml-10 md:mr-10 text-left mt-20'>
        {pricingPlans.map((plan)=>(
            <div key={plan.id} className={classNames(plan?.mostPopular ? 'border rounded-2xl p-10' : 'border rounded-2xl', '')}>
                <div className='content'>
                    <h3>{plan.name}</h3>
                    <span className='price'>${plan.price}</span>
                    <p className='text-sm'>{plan.description}</p>
                </div>

                <ul className='list'>
                    {plan.features.map((feature, index)=>(
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
                <button className='flex border'><a href={plan.link} className='planbtn'>{plan.option}</a></button>
            </div>
        ))}
      </div>
      <p className='text-[20px] font-[400] text-[#6b6b6b] mt-20'>Want More Plans? <a href="http://" className='text-[#632dd9] underline'>View More Plans</a></p>
    </div>
  )
}

export default Pricing
