import { clients } from "../constants"
import styles from "../style"
import { SectionWrapper } from '../hoc'

import { zoomIn } from '../utils/motion'

import { motion } from "framer-motion"

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div 
      className={`${styles.flexCenter} flex-wrap w-full`}>
      {clients.map((client, index) => (
        <motion.div
          variants={zoomIn(0.5 * index, 0.75)} 
          key={client.id}  
          className={`${styles.flexCenter} flex-1 sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain" />
        </motion.div>
      ))}
    </div>
  </section>
)


export default SectionWrapper(Clients, '')