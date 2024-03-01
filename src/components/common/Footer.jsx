import React from 'react';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import GradientText from './GradientText';
import Logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <div className='bg-[#11171F] md:h-[374px] flex flex-col md:px-28 px-4'>
        <div className='flex justify-between mt-14 flex-col md:flex-row'>
          <div className='w-full md:w-[392px] mb-8 md:mb-0'>
            <div className='flex gap-2 mt-2'>
              <img src={Logo} alt="Logo"/>
              <div className=' flex flex-col '>
                <p className="font-lexend font-semibold text-xl md:text-3xl text-white mt-1">
                  raptorX
                  <GradientText text={".ai"}/>
                </p>
              </div>
            </div>
            <p className='md:w-[392px] font-gilroy text-[#B3B5B8] text-base mt-5'>At RaptorX, our technology is all about trust and safety. We make sure every interaction fills you with confidence.</p>
          </div>
          
          <div className='w-full md:w-[311px] mx-4 md:mx-32 font-gilroy mb-8 md:mb-0'>
            <div className='md:hidden flex gap-28'>
              <div>
                <Link to='/'><li className='list-none text-[#1FA3ED] font-normal text-lg p-1.5'>Support</li></Link>
                <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>Login</li></Link>
                <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]' >Developer</li></Link>
                <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>Pricing</li></Link>
                <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>Support</li></Link>
                <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>FAQs</li></Link>
              </div>
              
              <div className='w-full md:w-[355px] font-gilroy list-none text-[#B3B5B8] mx-4'>
                <Link to='/'><li className='text-[#1FA3ED] font-normal text-lg p-1.5 md:text-base'>Company</li></Link>
                <Link to='/'><li className='p-1.5 hover:text-[#1FA3ED] text-sm'>About Us</li></Link>
                <Link to='/'><li className='p-1.5 hover:text-[#1FA3ED] text-sm' >Carrers</li></Link>
                <Link to='/'><li className='p-1.5 hover:text-[#1FA3ED] text-sm'>News and Press</li></Link>
              </div>
            </div>
            <div className='hidden md:block font-gilroy'>
              <Link to='/'><li className='list-none text-[#1FA3ED] font-normal text-lg p-1.5'>Support</li></Link>
              <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>Login</li></Link>
              <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]' >Developer</li></Link>
              <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>Pricing</li></Link>
              <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>Support</li></Link>
              <Link to='/'><li className='text-sm list-none text-[#B3B5B8] p-1.5 hover:text-[#1FA3ED]'>FAQs</li></Link>
            </div>
          </div>

          <div className='hidden md:block w-full md:w-[355px] font-gilroy list-none text-[#B3B5B8] mx-4'>
            <Link to='/'><li className='text-[#1FA3ED] font-normal text-lg p-1.5 md:text-base'>Company</li></Link>
            <Link to='/'><li className='p-1.5 hover:text-[#1FA3ED] text-sm'>About Us</li></Link>
            <Link to='/'><li className='p-1.5 hover:text-[#1FA3ED] text-sm' >Carrers</li></Link>
            <Link to='/'><li className='p-1.5 hover:text-[#1FA3ED] text-sm'>News and Press</li></Link>
          </div>
        </div>

        <div className='flex flex-col gap-3 mt-5'>
          <div className='flex gap-x-6 text-[#676B70]'>
            <FaFacebook size={24}/>
            <FaInstagramSquare size={24}/>
            <FaTwitter size={24}/>
            <FaTelegramPlane size={24}/>
            <FaYoutube size={24}/>
          </div>
          <p className='text-[#676B70] font-gilroy text-sm md:text-base pb-4'>&copy; Copyright 2024 RaptorX, All rights reserved. </p>
        </div>
      </div>

      <div className='bg-[#1B2129] h-[48px] text-[#B3B5B8] flex justify-center items-center font-gilroy gap-x-3 md:gap-x-28 text-xs md:text-sm list-none p-1'>
        <Link to=''> <li className=''>Terms of Use</li> </Link>
        <Link to=''> <li className=''>Compliances</li> </Link>
        <Link to=''> <li className=''>Privacy</li> </Link>
        <Link to=''> <li className=''>Privacy and Policy</li> </Link>
      </div>
    </>
  )
}