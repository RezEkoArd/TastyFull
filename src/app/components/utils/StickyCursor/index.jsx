"use client"

import { useState,useEffect } from 'react';
import styles from './styles.module.css';
import {motion, useMotionValue, useSpring} from 'framer-motion';

const index = ({stickyElement}) => {
    const [isHovered, setIsHovered] = useState(false);
    const cursorSize = 20;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }

    const smoothOption = {damping: 20, stiffness: 300, mass: 0.5}
    const smoothMouse = {
        x: useSpring(mouse.x,smoothOption),
        y: useSpring(mouse.y,smoothOption)
    }

    const manageMouseMove = (e) => {
        const [clientX, clientY] = e;
        mouse.x.set(clientX - cursorSize/2)
        mouse.y.set(clientY - cursorSize/2)
    }

    const manageMouseOver = () => {
        setIsHovered(true);
    }

    const manageMouseLeave = () => {
        setIsHovered(false);
    }

    useEffect(() => {
        window.addEventListener("mousemove",manageMouseMove);
        // stickyElement.current.addEventListener("mouseover",manageMouseOver)
        // stickyElement.current.addEventListener("mouseleave",manageMouseLeave)
        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
            // stickyElement.current.removeEventListener("mouseover",manageMouseOver)
            // stickyElement.current.removeEventListener("mouseleave",manageMouseLeave)
        }
    },[])
    
  return (
    <motion.div className={styles.cursor}
    style={{left: smoothMouse.x,  top: smoothMouse.y}}
    animate={{width: cursorSize, height: cursorSize}}
    >
        
    </motion.div>
  )
}

export default index