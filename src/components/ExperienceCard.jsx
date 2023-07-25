import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, padding: experience.company_name !== 'Pendo' ? 8 : 0 }}
      icon={
        <div>
          <img 
            src={experience.icon}
            alt={experience.company_name} 
      />
        </div>
      }
    >
      <div>
        <h3 className='text-whit text-[24px] font-bold'>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
          {experience.company_name}
        </p>
      </div>
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          experience.points.map((point, index) => (
            <li key={`experience-point-${index}`} 
            className='text-white-100 text-[14px] pl-1 tracking-wider'>
            {point}
            </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

export default ExperienceCard