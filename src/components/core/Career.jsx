import React from 'react';
import Vacancy from '../../assets/vacancy.png';
import Vector from '../../assets/vector.png'
import OportunityAvailable from './OportunityAvailable';

export default function Career() {
  return (
    <>
      <div className='bg-[#11171F] h-auto lg:h-[480px] flex flex-col lg:flex-row justify-center items-center lg:place-content-center px-8 lg:px-24 lg:gap-44 mt-20'>
        <div className='w-full lg:w-[50%] lg:max-w-[552px] h-auto lg:h-[252px] lg:mr-0 flex flex-col justify-center gap-4 font-base'>
          <div>
            <p className='font-gilroy text-[#1FA3ED] text-lg text-center lg:text-left mt-8'>C A R E E R S</p>
          </div>
          <div>
            <p className='font-gilroy text-4xl font-medium text-white text-center lg:text-left lg:w-[510px] mx-auto lg:mx-0'>We're on the hunt for enthusiastic individuals who love what they're into.</p>
          </div>
          <div>
            <p className='font-gilroy text-gray-400 text-center lg:text-left '>Embark on an Exciting Journey with Us! We're in Search of Enthusiastic Individuals Who Love What They're Into. Join Our Team and Let Your Passion Propel You to Success!</p>
          </div>
        </div>
        <div className='mt-4 lg:mt-0'>
          <img src={Vacancy} alt="Vacancy" className='w-full lg:w-auto' />
        </div>
      </div>
      <OportunityAvailable/>
    </>
  );
}
