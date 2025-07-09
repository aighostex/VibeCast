import React, { useState, useEffect } from 'react'; 
import { footerLinks } from '../constants/footer';
import vibeLogo from '/src/assets/vibelogo.svg';
import { FaXTwitter, FaInstagram} from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';

import { Link } from 'lucide-react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <div className='bg-[#FAFAFA] border-[#ADADAD] border-t-1'>
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-8 pl-9 p-3 pt-15 leading-20'>
      <div>
       <a href="/"><img src={vibeLogo} alt="" srcset="" className='h-[70px] w-[260px]'/></a>
          <p className='text-2xl leading-9 mt-10 text-[#6b6b6b] font-[500]'>AI-powered YouTube <br /> comment insights for <br /> creators.</p>
        <div className='inline-flex gap-9 mt-10'>
            <FaXTwitter className='socials' />
            <FaInstagram className='socials'/>
            <FiYoutube className='socials' />
          </div>
        </div>
          {footerLinks.map((link)=>(
            <div key={link.id}>
              <h3 className='text-2xl font-[600] text-[#1E1E1E]'>{link.header}</h3>
              {link.links.map((pages)=>(
                <ul>
                  <li className='text-[24px] text-[#6B6B6B] font-[600] hover:text-[#632dd9] hover:underline'><a href={pages.href}>{pages.page}</a></li>
                </ul>
              ))}
            </div>
          ))}

          {/* coyright */}
          
    </div>
    <p className='text-sm mt-10 text-center pb-6'>&copy; {year} Vibe Cast. All Rights Reserved</p>
    </div>
  )
}

export default Footer
