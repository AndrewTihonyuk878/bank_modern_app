import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"
import { SectionWrapper } from '../hoc'
import { fadeIn } from '../utils/motion'

import { motion } from "framer-motion"

const CardDeal = () => (
  <section className={layout.section}>
    <motion.div 
      variants={fadeIn('left', '', 0.1, 1)}
      className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal <br className="sm:block hidden"/> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
      <Button styles="mt-10"/>
    </motion.div>

    <motion.div 
      variants={fadeIn('right', '', 0.1, 1)}
      className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </motion.div>
  </section>
)

export default SectionWrapper(CardDeal, "")