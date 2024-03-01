import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const opportunity = [
  {
    position: 'Frontend Developer',
    modeOfWork: 'On-site. Hyderabad, India.',
    icon: <Link to='/oportunity'><FaArrowRight /></Link>,
  },
  {
    position: 'Backend Developer',
    modeOfWork: 'On-site. Hyderabad, India.',
    icon: <FaArrowRight />,
  },
  {
    position: 'AI-ML Engineer',
    modeOfWork: 'On-site. Hyderabad, India.',
    icon: <FaArrowRight />,
  },
  {
    position: 'Data Engineer',
    modeOfWork: 'On-site. Hyderabad, India.',
    icon: <FaArrowRight />,
  },
  {
    position: 'Outbond PM (Partnerships/Business Development)',
    modeOfWork: 'On-site. Hyderabad, India.',
    icon: <FaArrowRight />,
  },
];

export default function OpportunityAvailable() {
  return (
    <div className='bg-[#020811] pb-8 sm:pb-28'>
      <h2 className='text-4xl text-white font-gilroy px-6 sm:px-28 pt-8 sm:pt-20'>Opportunities Available</h2>
      <div className='flex flex-col mt-10 mx-4 gap-4 sm:gap-8 sm:mx-28'>
        {opportunity.map((oportunity, index) => (
          <div key={index} className='bg-[#1B2129] rounded-xl'>
            <div className='p-4 sm:p-6 flex sm:flex-row items-center justify-between'>
              <div className='mb-4 sm:mb-0 sm:mr-4'>
                <h3 className='text-xl sm:text-2xl font-questrial font-normal text-white'>{oportunity.position}</h3>
                <p className='text-sm sm:text-base text-[#9A9CA0] font-gilroy'>{oportunity.modeOfWork}</p>
              </div>
              <div className='text-[#CCCECF] text-xl'>
                {oportunity.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
