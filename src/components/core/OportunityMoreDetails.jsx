import React from 'react'
import Button from '../common/Button'

const missionWhyJoinUs = [
    {
        title: 'Misssion:',
        desc: 'RaptorX.ai is on a mission to revolutionize fraud prevention and risk assessment using cutting-edge technologies. We are committed to creating innovative solutions that empower businesses to stay ahead of emerging threats and protect their assets.'
    },
    {
        title: 'Why Join Us:',
        desc: 'Joining RaptorX.ai means being part of a dynamic team at the forefront of innovation in the cybersecurity domain. As a member of our team, you will have the opportunity to work with the latest technologies and contribute to meaningful projects that have a real impact on businesses worldwide. We offer competitive salaries, ESOPs, and a collaborative work environment where your ideas are valued and encouraged.'
    }
]

const locationSalary = [
    {
        title: 'Location:',
        desc: 'Hyderabad, India'
    },
    {
        title: 'Salary:',
        desc: 'Competitive salary based on experience, with additional benefits including ESOPs.',
    }
]

export default function OportunityMoreDetails() {
    return (
        <div className='bg-[#020811]'>
            <div className='pt-8 px-4 md:pt-20 md:px-20'>
                <h1 className='font-gilroy text-2xl md:text-3xl text-white text-left'>More Details</h1>
            </div>
            
            <div className='px-4 md:px-20'>
                {missionWhyJoinUs.map((item, index) => (
                    <div key={index} className='mt-6 md:mt-10'>
                        <div className='text-xl md:text-2xl font-gilroy text-white'>{item.title}</div>
                        <div className='text-base font-gilroy text-[#9A9CA0] mt-2'>{item.desc}</div>
                    </div>
                ))}
            </div>

            <div className='px-4 md:px-20 mt-8 md:mt-10'>
                <div>
                    <div className='text-xl md:text-2xl font-gilroy text-white'>Responsibilities:</div>
                    <div className='text-base font-gilroy text-[#9A9CA0] mt-2'>
                        <ul className='list-disc pl-7'>
                            <li>Designing and implementing user interfaces for web applications using modern frontend frameworks such as React or Angular.</li>
                            <li>Collaborating with backend developers to integrate frontend components and ensure seamless functionality.</li>
                            <li>Ensuring the scalability, performance, and responsiveness of web applications.</li>
                            <li>Conducting code reviews and providing feedback to ensure code quality and best practices are maintained.</li>
                            <li>Staying up-to-date with the latest frontend development trends and technologies.</li>
                        </ul>
                    </div>
                </div>

                <div className='mt-6 md:mt-10'>
                    <div className='text-xl md:text-2xl font-gilroy text-white'>Tech Stack:</div>
                    <div className='text-base font-gilroy text-[#9A9CA0] mt-2'>
                        <ul className='list-disc pl-7'>
                            <li>JavaScript (ES6+), HTML5, CSS3</li>
                            <li>React.js, AngularJS</li>
                            <li>Redux, MobX</li>
                            <li>RESTful APIs</li>
                        </ul>
                    </div>
                </div>
            </div>
                
            <div className='px-4 md:px-20 mt-8 md:mt-10'>
                {locationSalary.map((item, index) => (
                    <div key={index} className='mt-6 md:mt-10'>
                        <div className='text-xl md:text-2xl font-gilroy text-white'>{item.title}</div>
                        <div className='text-base font-gilroy text-[#9A9CA0] mt-2'>{item.desc}</div>
                    </div>
                ))}
            </div>

            <div className='text-center md:text-left'>
                <Button/>
            </div>
                
            
        </div>
    )
}
