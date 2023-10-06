import styles from "../style"
import Button from "./Button"
import { SectionWrapper } from '../hoc'
import { slideIn, } from '../utils/motion'

import { motion } from "framer-motion"

const CTA = () => (
  <motion.section 
    variants={slideIn('right', 'tween', 0.2, 1)}
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 am:mt-0 mt-10`}>
      <Button />
    </div>
  </motion.section>
)

export default SectionWrapper(CTA, '')