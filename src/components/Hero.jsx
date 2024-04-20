import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { ComputersCanvas } from './canvas'

const Hero = () => {
  return (
    <section className="relative w-full mx-auto h-screen flex flex-row justify-center ">
      <div className="w-1/2 flex justify-center items-center px-10">
        <ComputersCanvas />
      </div>
      <div className="flex flex-row justify-start items-center w-1/2 px-10">
        <div className="flex items-center mr-10 flex-col">
          <div className="w-5 h-5 rounded-full bg-[#FF726F]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient bg-[#FF726F]" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#FF726F]">Said</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 hover:bg-gray-200">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero
