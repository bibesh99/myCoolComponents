"use client"
import * as React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import styles from "./styles.module.css"

export default function TwoColumnParallax() {
  const alignCenter = { display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }
  return (
    <div className='w-full min-h-[70vh]' style={{}}>
   
      <Parallax className=' overflow-hidden' style={{scrollbarWidth: "none",minHeight: "70vh"}} pages={3}>

        <ParallaxLayer sticky={{ start: 0, end: 1 }} style={alignCenter}>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>First</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2  }} style={alignCenter} className='overflow-hidden'>
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>Second</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>II&apos;m not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}
