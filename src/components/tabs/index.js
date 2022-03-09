import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import * as styles from "./tabs.module.scss"
import Button from "../button"
import cn from "classnames"

export default function Tabs ({ children, isColored, className, items }) {
  const [swiper, setSwiper] = useState(null)
  const [activeSlideIndex, setActiveSlideIndex] = useState(0)
  const tabs = items.filter(i => !i.disabled).map(i => (
    <SwiperSlide
      className={styles.tab}
      key={`tab-${i.name}`}>
      {i.content}
    </SwiperSlide>))
  const buttons = items.map((item, index) => (
    <Button
      key={`tab-btn-${item.name}`}
      title={item.name}
      icon={item.icon}
      className={cn(styles.button, { [styles.active]: index === activeSlideIndex })}
      disabled={item.disabled}
      onClick={() => {
        if (swiper) {
          swiper.slideTo(index, 1000)
          setActiveSlideIndex(index)
        }
      }} />
  ))

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>{buttons}</div>
      <Swiper
        slidesPerView={1}
        speed={1000}
        allowTouchMove={false}
        onSwiper={(swiper) => setSwiper(swiper)}
      >
        {tabs}
      </Swiper>
    </div>
  )
}
