import { motion } from 'framer-motion';
import React from 'react';

import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import ServiceCard from './ServiceCard';

const About = () => {
  return (
    <>
      <motion.div
      variants={textVariant()}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn('','', 0.1, 1)}
      className='mt-4 text-secondary text-[17px] w-w-3xl leading-[30px]'
      >
      I'm a seasoned Senior Mobile Developer with a strong focus on React Native, 
      with over 6 years of experience in the field. My passion lies in crafting cutting-edge 
      features and improvements, always following best practices in mobile development. Beyond coding, 
      I thrive on creating a positive and fun working environment. My skills also encompass JavaScript, TypeScript, React, Vue.js, Node.js, and Basic Python. 
      Let's connect and explore exciting opportunities together!
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
       {
        services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
       ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')