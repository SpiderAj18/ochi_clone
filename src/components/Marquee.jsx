import { motion } from 'framer-motion'
import React from 'react'


function Marquee() {
  return (
    <div className='bg-[#004D43] w-full py-16 rounded-t-xl'>
        <div className="text border-t-[1px] border-b-[1px] flex overflow-hidden whitespace-nowrap gap-5 ">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='uppercase text-[30vh] font-bold leading-none font-["Founders_Grotesk_X-Condensed"] pt-5 -mb-20 mt-3' >we are ochi we are ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:8}} className='uppercase text-[30vh] font-semibold leading-none font-["Founders_Grotesk_X-Condensed"] pt-5 -mb-10 mt-3'  >we are ochi we are ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marquee