import React from "react"
import { Link } from 'gatsby'
import * as styles from "./welcome.module.scss"
import cn from "classnames"

export default function Welcome ({ children, isColored, id, className,auth }) {
  return (
    <div className={styles.container}>
      <div className={styles.videoContainer}>
        <video
          autoPlay
          src={
            'https://res.cloudinary.com/dtp5yitjt/video/upload/v1629817028/combined2_pqra8s.mp4'
          }
          playsInline
          loop='loop'
          muted
          preload='auto'
          id='myVideo'
          className={styles.videoContainer}
        >
          your browser does not support video tag.
        </video>
      </div>
      <div className={styles.upperContainer}>
        {' '}
        <div className={styles.logo} />
        <div className={styles.lowerContainer}>
          <h1 className={styles.motto}>
            Get personalized travel recommendations, updates, restrictions and
            much more.
          </h1>{auth ? <>
          <a className={styles.actionButton} href='https://pulfy.com/app/browse'>
            Go to App
          </a>
          <div className={styles.login2}>
          </div>
          <div className={styles.login2}>
          </div>
          </>
           :<>
          <a className={styles.actionButton} href='https://pulfy.com/app/signup'>
            Signup
          </a>
          <a className={styles.actionButton2} href='https://pulfy.com/app/onboarding/1'>
            Continue as Guest{' '}
          </a>
          <a className={styles.login2}  href='https://pulfy.com/app/login'>
            <span>Do you have an account?</span> Login
          </a>
          </>}


        </div>
      </div>
    </div>
  )
}
