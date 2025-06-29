import React from 'react'
import { values } from '../constants/ourValues';
import { ourTeam } from '../constants/ourTeam';

function About() {
  return (
    <div className='bg-[#fafafa] mt-40 pt-30 w-full pb-40'>
        <h1 className='text-[60px] font-[800] text-center'>About Vibecast</h1>
        <p className='text-[32px] font-[500] text-center mt-3 text-[#6b6b6b]'>We're on a mission to help YouTube creators understand and <br /> grow their audience.</p>

        <div className='grid md:grid-cols-2 gap-10 mt-6'>
            <div className='text-left'>
                <h2 className='text-4xl font-[800] mb-8'>Our Story</h2>
                <div>
                    <p className='pstory'>Vibecast was born from a simple observation: YouTube creators spend countless hours reading comments, 
                    but struggle to see the bigger picture of what their audience is saying. </p>
                    <p className='pstory'>Founded in 2025 by Salami Rasheed, a former content creator with over 1 million subscribers, 
                    Vibecast combines cutting-edge AI with a deep understanding of creators' needs.</p>
                    <p className='pstory'>Our team of AI experts, data scientists, and former creators has built a platform that transforms scattered comments into actionable insights, 
                    helping creators make better content decisions and build stronger connections with their audience.</p>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-6 bg-[#ffffff] p-6 rounded-[20px] drop-shadow-2xl'>
                <div className='pdiv'>
                    <p className='p1'>4000+</p>
                    <p className='p2'>Creators Using Vibecast</p>
                </div>
                <div className='pdiv'>
                    <p className='p1'>50M+</p>
                    <p className='p2'>Comments analyzed</p>
                </div>
                <div className='pdiv'>
                    <p className='p1'>98%</p>
                    <p className='p2'>Sentiment accuracy</p>
                </div>
                <div className='pdiv'>
                    <p className='p1'>1</p>
                    <p className='p2'>Platform(s) supported</p>
                </div>
            </div>
        </div>
        <button type="button" className='bg-[#632dd9] text-[20px] text-[#f5f5f5] cursor-pointer w-[379px] h-[54px] 
        rounded-[8px] mt-30 drop-shadow-2xl hover:bg-[#ffffff] hover:text-[#6b6b6b] hover:border-0'>Learn More About Our Journey</button>

        {/* Our Values */}
        <div>
            <h2 className='text-center text-[32px] font-[800] mt-32'>Our Values</h2>
            <div className='grid md:grid-cols-3 gap-8 mt-7'>
                {values.map((value, index)=>(
                    <div key={index} className='border rounded-[20px] p-[30px] border-[#C4BEBE]'>
                        <div className='flex justify-center items-center bg-[#632dd9] w-[60px] h-[60px] rounded-[10px] mb-5'>
                            <img src={value.icon} alt="" srcset="" />
                        </div>
                        <h3 className='text-[24px] font-[600] text-[#1E1E1E] mb-3'>{value.heading}</h3>
                        <p className='text-[20px] text-[#6B6B6B] font-[500]'>{value.message}</p>
                    </div>
                ))}
            </div>
        </div>
        {/* Meet Our team */}
        <div>
            <h2 className='text-center text-[32px] font-[800] mt-20'>Meet Our Team</h2>
            <div className='grid md:grid-cols-3 gap-8'>
                {ourTeam.map((team, index) => (
                    <div key={index} className='border rounded-[20px] p-[30px] border-[#C4BEBE] flex flex-col items-center mt-20'>
                        <div
                        className='flex justify-center items-center rounded-full text-[36px] font-[700] w-[120px] h-[120px] mb-5'
                        style={{ backgroundColor: team.bgColor, color: team.textColor }}
                        >
                            {team.intials}
                        </div>
                        <h2 className='text-[32px] font-[600] text-[#1E1E1E]'>{team.name}</h2>
                        <p className='text-[#672FE0] text-2xl'>{team.role}</p>
                        <p className='text-center pt-14 text-[20px] text-[#6B6B6B]'>{team.about}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
