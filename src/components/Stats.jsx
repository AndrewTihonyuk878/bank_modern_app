import { stats } from '../constants'
import styles from '../style'
import { SectionWrapper } from '../hoc'
import { zoomIn } from '../utils/motion'

import { motion } from "framer-motion"

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat, index) => (
      <motion.div
        variants={zoomIn(0.5 * index, 0.75)}
        key={stat.id} 
        className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className='font-popins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
        <p className='font-popins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </motion.div>
    ))}
  </section>
)

export default SectionWrapper(Stats, "")