import React from 'react'
import { pricingPlans } from '../constants/pricingPlan';
import { FaCheck } from 'react-icons/fa';


const Pricing = () => {
    function classNames (...classes){
        return classes.filter(Boolean).join(" ");
    }
  return (
    <div id='pricing' className='text-center mt-40 pt-30'>
      <h1 className='text-[60px] font-[800] text-[#1e1e1e]'>Simple, Transparent Pricing</h1>
      <p className='text-[32px] font-[500] text-[#6b6b6b]' >Choose the plan that's right for your creator journey</p>

      {/* plans */}
      <div className='grid md:grid-cols-3 gap-8 text-left mt-10'>
        {pricingPlans.map((plan)=>(
            <div key={plan.id} className={classNames(plan?.mostPopular ? 'border rounded-2xl p-10 pt-0 border-[#9367F5] shadow-xl hover:scale-105': 'border rounded-2xl p-10', 'mt-15')}>
                <div className='mb-8'>
                    <div className='relative top-[-1.4rem] left-[25%] right-[30%] text-[20px] text-[#ffffff]'>
                    <div className={classNames(plan.mostPopular ? ' bg-[#9367F5] w-fit h-[45.07px] rounded-[30px] flex items-center justify-center pl-10 pr-10': '')}>{plan.mostPopular ? 'Most Popular':''}</div>
                    </div>
                    <h3 className='text-3xl font-[500]'>{plan.name}</h3>
                    <span className='text-[50px] font-[700] '>${plan.price}<span className='text-[24px] text-[#6B6B6B]'>{plan.duration}</span></span>
                    <p className='text-[18px] text-[#6B6B6B]'>{plan.description}</p>
                </div>

                <ul className='leading-15'>
                    {plan?.features?.map((feature )=>(
                        <li  className='text-[18px] text-[#6B6B6B] flex gap-4'>
                        <FaCheck className='w-[35px] h-[35px] text-[#07E877] mt-3'/>
                        {feature}</li>
                    ))}
                </ul>
                <button className={classNames(plan.mostPopular ? ' bg-[#632dd9] text-[20px] w-full h-[50px] rounded-[8px] mt-5 text-[#f5f5f5]' : 
                'border-[1.2px] border-[#9367F5] w-full h-[50px] text-[#632DD9] rounded-[8px] mt-4','mt-10 hover:scale-105')}><a href={plan.link}>{plan.option}</a></button>
            </div>
        ))}
      </div>
      <p className='text-[20px] font-[400] text-[#6b6b6b] mt-20'>Want More Plans? <a href="http://" className='text-[#632dd9] underline'>View More Plans</a></p>

      {/* Frequently asked questions */}
       <div className="max-w-5xl mx-auto mt-20 text-left bg-[#fafafa] p-10 rounded-2xl">
        <h3 className="text-[28px] font-[600] mb-6 text-center">Frequently Asked Questions</h3>
        <div className="grid md:grid-cols-2 gap-8 text-[20px] text-[#6b6b6b]">
          <div>
            <p className="font-[600] text-[#1e1e1e] mb-2">Can I switch plans later?</p>
            <p>Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
          </div>
          <div>
            <p className="font-[600] text-[#1e1e1e] mb-2">Is there a long-term contract?</p>
            <p>No, all plans are month-to-month. You can cancel anytime without any cancellation fees.</p>
          </div>
          <div>
            <p className="font-[600] text-[#1e1e1e] mb-2">What payment methods do you accept?</p>
            <p>We accept all major credit cards, PayPal, and for Enterprise plans, we can arrange invoicing.</p>
          </div>
          <div>
            <p className="font-[600] text-[#1e1e1e] mb-2">Do you offer discounts for annual billing?</p>
            <p>Yes, you can save 20% by choosing annual billing on any of our paid plans.</p>
          </div>
        </div>
        <p className="mt-15 text-center text-[20px] font-[400]">Have more questions? <a href="#" className="text-[#632dd9] underline">Contact Our Sales Team</a></p>
      </div>
    </div>
  )
}

export default Pricing
