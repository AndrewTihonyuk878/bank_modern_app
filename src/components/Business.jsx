import { features } from "../constants"
import styles, { layout } from "../style"
import Button from "./Button"

import { fadeIn, slideIn } from '../utils/motion'
import { SectionWrapper } from '../hoc'

import { motion } from "framer-motion"

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </motion.div>
)

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)} 
        className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You do the business, <br className="sm:block hidden"/> we’ll handle the money.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>

        <Button styles="mt-10"/> 
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Business, 'features')