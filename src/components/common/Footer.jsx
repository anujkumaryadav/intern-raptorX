// import React from 'react'
// import { Link } from 'react-router-dom';
// import { FaFacebook } from "react-icons/fa";
// import { FaInstagramSquare } from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import GradientText from './GradientText'
// import Logo from '../../assets/logo.png'

// export default function Footer() {
//   return (
//     <>
//       <div className='bg-[#11171F] h-[374px] flex flex-col p-10'>
//         <div className='flex justify-between px-0'>
//           <div className='w-[392px]'>
//             <div className='flex gap-2'>
//                 <img src={Logo}/>
//                 <div className=' flex flex-col '>
//                   <p className="font-lexend font-semibold text-2xl text-white mt-1">
//                     raptorX
//                     <GradientText text={".ai"}/>
//                   </p>
//                 </div>
//             </div>
//             <p className='w-[392px] font-questrial text-[#CCCECF] mt-5'>At RaptorX, our technology is all about trust and safety. We make sure every interaction fills you with confidence.</p>
//           </div>
            
//           <div  className='w-[311px]'>
//             <Link to='/'><li className='list-none text-[#1FA3ED] font-semibold text-lg font-questrial p-1'>Support</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]'>Login</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]' >Developer</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]'>Pricing</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]'>Support</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]'>FAQs</li></Link>
//           </div>

//           <div className='w-[355px]'>
//             <Link to='/'><li className='list-none text-[#1FA3ED] font-semibold text-lg font-questrial p-1'>Company</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]'>About Us</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]' >Carrers</li></Link>
//             <Link to='/'><li className='text-sm list-none text-[#CCCECF] font-questrial p-1 hover:text-[#1FA3ED]'>News and Press</li></Link>
//           </div>
//         </div>

        
//         <div className='flex flex-col gap-5'>
//           <div className='flex gap-5 text-[#CCCECF]'>
//               <FaFacebook size={24}/>
//               <FaInstagramSquare size={24}/>
//               <FaXTwitter size={24}/>
//               <FaTelegramPlane size={24}/>
//               <FaYoutube size={24}/>
//           </div>
//           <p className='text-[#CCCECF] font-questrial'>&copy; Copyright 2024 RaptorX, All rights reserved. </p>
//         </div>
//       </div>

//       <div className='bg-[#1B2129] h-[48px] flex justify-center gap-20 items-center'>
//           <Link to=''> <li className='text-sm list-none text-[#CCCECF] font-questrial p-1'>Terms of Use</li> </Link>
//           <Link to=''> <li className='text-sm list-none text-[#CCCECF] font-questrial p-1'>Compliances</li> </Link>
//           <Link to=''> <li className='text-sm list-none text-[#CCCECF] font-questrial p-1'>Privacy</li> </Link>
//           <Link to=''> <li className='text-sm list-none text-[#CCCECF] font-questrial p-1'>Privacy and Policy</li> </Link>
//       </div>

      
//     </>
//   )
// }


import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaTwitter, FaTelegramPlane, FaYoutube } from "react-icons/fa";
import GradientText from './GradientText'
import Logo from '../../assets/logo.png'

export default function Footer() {
  return (
    <>
      <div className='bg-[#11171F] h-auto lg:h-[374px] flex flex-col justify-between p-6 lg:p-10'>
        <div className='flex flex-col justify-center items-center lg:items-start lg:flex-row'>
          <div className='w-full lg:w-[392px]'>
            <div className='flex items-center justify-center lg:justify-start gap-2'>
                <img src={Logo} alt="Logo" className='w-12 h-12' />
                <p className="font-lexend font-semibold text-2xl text-white mt-1">
                  raptorX
                  <GradientText text={".ai"}/>
                </p>
            </div>
            <p className='font-questrial text-[#CCCECF] text-center lg:text-left mt-5'>At RaptorX, our technology is all about trust and safety. We make sure every interaction fills you with confidence.</p>
          </div>
            
          <div className='w-full lg:w-[311px] mt-6 lg:mt-0 lg:ml-6'>
            <ul className='text-center lg:text-left'>
              <li><Link to='/' className='text-[#1FA3ED] font-semibold text-lg font-questrial hover:text-[#1FA3ED]'>Support</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Login</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Developer</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Pricing</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>FAQs</Link></li>
            </ul>
          </div>

          <div className='w-full lg:w-[355px] mt-6 lg:mt-0 lg:ml-6'>
            <ul className='text-center lg:text-left'>
              <li><Link to='/' className='text-[#1FA3ED] font-semibold text-lg font-questrial hover:text-[#1FA3ED]'>Company</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>About Us</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Careers</Link></li>
              <li><Link to='/' className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>News and Press</Link></li>
            </ul>
          </div>
        </div>

        <div className='flex flex-col items-center gap-2 mx-20 lg:items-start lg:flex-col'>
          <div className='flex gap-5 text-[#CCCECF] justify-center lg:justify-start mt-6 lg:mt-0'>
            <FaFacebook size={24}/>
            <FaInstagramSquare size={24}/>
            <FaTwitter size={24}/>
            <FaTelegramPlane size={24}/>
            <FaYoutube size={24}/>
          </div>
          <p className='text-[#CCCECF] font-questrial text-center lg:text-left mt-6 lg:mt-0'>&copy; Copyright 2024 RaptorX, All rights reserved. </p>
        </div>
      </div>

      <div className='bg-[#1B2129] h-auto lg:h-[48px] flex flex-wrap justify-center lg:justify-center gap-2 lg:gap-20 items-center p-4'>
          <Link to=''><span className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Terms of Use</span></Link>
          <Link to=''><span className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Compliances</span></Link>
          <Link to=''><span className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Privacy</span></Link>
          <Link to=''><span className='text-sm text-[#CCCECF] font-questrial hover:text-[#1FA3ED]'>Privacy and Policy</span></Link>
      </div>
    </>
  )
}
