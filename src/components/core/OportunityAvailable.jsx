// import React from 'react';
// import { FaArrowRight } from "react-icons/fa";

// const oportunity = [
//   {
//     position: 'Frontend Developer',
//     modeOfWork:
//       'On-site. Hyderabad, India.',
//     icon: <FaArrowRight />,
//   },
//   {
//     position: 'Backend Developer',
//     modeOfWork:
//       'On-site. Hyderabad, India.',
//     icon: <FaArrowRight />,
//   },
//   {
//     position: 'AI-ML Engineer',
//     modeOfWork:
//       'On-site. Hyderabad, India.',
//     icon: <FaArrowRight />,
//   },
//   {
//     position: 'Data Engineer',
//     modeOfWork:
//       'On-site. Hyderabad, India.',
//     icon: <FaArrowRight />,
//   },
//   {
//     position: 'Outbond PM (Partnerships/Business Development)',
//     modeOfWork:
//       'On-site. Hyderabad, India.',
//     icon: <FaArrowRight />,
//   },
// ];


// export default function OportunityAvailable() {
//   return (
//     <>

//     <div className='bg-[#020811] pb-28'>
//         <h2 className='text-4xl text-white font-questrial px-28 pt-20'>Oportunity Available</h2>
//         {oportunity.map((oportunity) => (
//             <div className='bg-[#1B2129] rounded-xl mx-28'>
//                 <div className='mt-6 h-[111px] rounded-xl flex items-center justify-between px-7'>
//                     <div className=''>
//                         <h3 className='text-2xl font-questrial font-normal text-white '>{oportunity.position}</h3>
//                         <p className='text-[#9A9CA0] font-questrial text-base'>{oportunity.modeOfWork}</p>
                        
//                     </div>
//                     <div className='text-[#CCCECF] text-xl'>
//                         {oportunity.icon}
//                     </div>
//                 </div>
//             </div>
//         ))}
//     </div>

//     </>
//   );
// }


import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const opportunity = [
  {
    position: 'Frontend Developer',
    modeOfWork: 'On-site. Hyderabad, India.',
    icon: <FaArrowRight />,
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
      <h2 className='text-4xl text-white font-questrial px-6 sm:px-28 pt-8 sm:pt-20'>Opportunities Available</h2>
      <div className='flex flex-col mt-10 gap-4 sm:gap-8 sm:mx-28'>
        {opportunity.map((oportunity, index) => (
          <div key={index} className='bg-[#1B2129] rounded-xl'>
            <div className='p-4 sm:p-6 flex sm:flex-row items-center justify-between'>
              <div className='mb-4 sm:mb-0 sm:mr-4'>
                <h3 className='text-2xl font-questrial font-normal text-white'>{oportunity.position}</h3>
                <p className='text-[#9A9CA0] font-questrial text-base'>{oportunity.modeOfWork}</p>
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
