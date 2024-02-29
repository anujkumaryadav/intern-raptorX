import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import GradientText from './GradientText';

export default function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};

  return (
    <>
      <div className='flex items-center justify-between px-24 bg-[#0F141D] h-20'>
        <div className='flex items-center gap-2'>
            <img src={Logo}/>
            <div>
                <Link to='/'>
                    <div className=' flex flex-col '>
                      <p className="font-lexend font-semibold text-2xl text-white mt-1">
                        raptorX
                          {/* <span className='bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold'>.ai</span> */}
                          <GradientText text={".ai"}/>
                      </p>
                    </div>
                </Link>
            </div>
        </div>

        <div className='hidden md:flex items-center justify-end'>
            <div className='text-center list-none flex select-none gap-5 font-questrial font-medium text-gray-300'>
                <Link to='/' className='hover:text-[#1FA3ED] cursor-pointer px-4 py-2'><li>Why RaptorX</li></Link>
                <Link to='/' className='hover:text-[#1FA3ED] cursor-pointer px-4 py-2'><li>Solutions</li></Link>
                <Link to='/' className='hover:text-[#1FA3ED] cursor-pointer px-4 py-2'><li>Industries</li></Link>
                <Link to='/' className='hover:text-[#1FA3ED] cursor-pointer px-4 py-2 mr-5'><li>Resources</li></Link>
            </div>
         </div>

         <div className='hidden md:block text-right '>
                <Link to="#">
                     <button className='border border-gray-400 rounded-s-md hover:border-gray-700 text-gray-200 font-semibold py-2 rounded inline-flex items-center px-5 h-10 mr-4'>
                         Sign Up
                     </button>
                 </Link>
             </div>

        <div className="mr-2 flex items-center sm:hidden">
            <button onClick={toggleMenu} 
            type="button" 
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">
                Open main menu
            </span>
            {!isMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            )}
            </button>
        </div>
     </div>
     {isMenuOpen && (
     <div className="sm:hidden">
       <div className="flex flex-col m-2 p-2 gap-2 shadow-md">
         <Link to='/' className='hover:text-pink-100 ' onClick={toggleMenu}>Why RaptorX</Link>
         <Link to='/' className='hover:text-pink-100' onClick={toggleMenu}>Solutions</Link>
         <Link to='/' className='nav-link hover:text-pink-100' onClick={toggleMenu}>Industries</Link>
         <Link to='/' className='nav-link hover:text-pink-100' onClick={toggleMenu}>Resources</Link>
         <Link to="#/" className='flex justify-center'>
            <button className='border border-gray-400 rounded-s-md hover:border-gray-700 text-gray-200 font-semibold py-2 rounded inline-flex items-center px-5 h-10 mr-4' onClick={toggleMenu}>
                Sign Up
            </button>
        </Link>
       </div>
     </div>
   )}
    </>
   )
 }