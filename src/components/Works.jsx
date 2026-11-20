import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  subtitle,
  role,
  description,
  stack,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)} className="flex w-full">
      <Tilt
        tiltMaxAngleX={8}
        tiltMaxAngleY={8}
        className='bg-tertiary p-4 rounded-2xl w-full flex flex-col h-full'
      >
        <div className='relative w-full h-[130px] rounded-xl bg-gradient-to-br from-[#915EFF] to-[#1d1836] flex items-end p-4'>
          <p className='text-white/80 text-[13px]'>{subtitle}</p>
          <span className='absolute top-3 left-3 text-[11px] text-white bg-black/60 px-2 py-1 rounded-full'>
            {role}
          </span>
          {live_link && (
            <a
              href={live_link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Open ${name} live site`}
              className='absolute top-3 right-3 bg-black/80 w-9 h-9 rounded-full flex justify-center items-center'
            >
              <svg viewBox='0 0 24 24' className='w-5 h-5' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round'>
                <circle cx='12' cy='12' r='2' />
                <path d='M16.24 7.76a6 6 0 0 1 0 8.49M7.76 16.24a6 6 0 0 1 0-8.49M19.07 4.93a10 10 0 0 1 0 14.14M4.93 19.07a10 10 0 0 1 0-14.14' />
              </svg>
            </a>
          )}
        </div>

        <div className='mt-4'>
          <h3 className='text-white font-bold text-[20px] leading-tight'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-auto pt-4 flex items-center justify-between gap-3'>
          <div className='flex flex-wrap gap-2'>
            {stack.map((tech) => (
              <img
                key={tech.name}
                src={tech.icon}
                alt={tech.name}
                title={tech.name}
                className='w-6 h-6 object-contain bg-white/90 rounded p-0.5'
              />
            ))}
          </div>
          {live_link && (
            <a
              href={live_link}
              target='_blank'
              rel='noopener noreferrer'
              className='shrink-0 text-white/80 hover:text-white text-[14px] font-medium whitespace-nowrap'
            >
              View Live &rarr;
            </a>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[20px] max-w-3xl leading-[30px]'
        >
          Production systems I have built at DEBUGSOFT for government
          cooperative offices and institutions in Nepal, from Angular and React
          frontends to backends I designed and maintain. The source
          code is private; the live sites are linked on each card.
        </motion.p>
      </div>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
