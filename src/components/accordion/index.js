import React, {useState} from "react"
import { AnimatePresence, motion } from "framer-motion"
import * as styles from './accordion.module.scss'
import cn from "classnames"
export default function Accordion ({ items, className }) {
  const [activeIndex, setActiveIndex] = useState(-1)
  const sections = items.map((item, index) => (
    <div key={`acc-i-${item.title}`} className={styles.item} >
      <button
        className={cn(styles.header, {[styles.active]: activeIndex === index})}
        onClick={() => {activeIndex === index ? setActiveIndex(-1) : setActiveIndex(index)}}
      >
          {item.title}
      </button>
      <AnimatePresence initial={false}>
        {activeIndex === index && (
          <motion.section
            key="content"

            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto"},
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className={styles.content}>
              {item.content}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  ))

  return <div className={styles.container}>
    {sections}
  </div>
}
