import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
// import videoBg from "@/assets/videoBg.mp4";

const Hero = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.title}>
        <h1>Tastyfull</h1>
        <p>New Experience Journey your Tastyful Bites</p>
        <div className={styles.buttons}>
          <Link
            href={"#first-section"}
            className="text-color-primary 
                p-[1rem] border-2 border-color-primary hover:scale-105 "
          >
            See Recommended Restaurant
          </Link>
        </div>
      </div>
      <video autoPlay loop muted className={styles.video}>
        <source src="/videoBg.mp4" type="video/mp4"/>
      </video>
    </div>
  );
};

export default Hero;
