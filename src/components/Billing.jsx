import { apple, bill, google } from "../assets"
import styles, { layout } from '../style'
import { SectionWrapper } from '../hoc'
import { fadeIn } from '../utils/motion'

import { motion } from "framer-motion"

const Billing = () => (
  <section className={layout.sectionReverse}>
    <motion.div 
      variants={fadeIn('up', '', 0.1, 1)}
      className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] relative z-[5]"/>

      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"/>
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
    </motion.div>

    <motion.div 
      variants={fadeIn('down', '', 0.1, 1)}
      className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className="sm:block hidden"/> billing & invoicing.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="google_play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[128px] h-[42px] object-contain cursor-pointer" />
      </div>
    </motion.div>
  </section>
)

export default SectionWrapper(Billing, 'product')