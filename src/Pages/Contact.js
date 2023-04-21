// Local CSS
import styles from '../components/contact.module.css';
// Global CSS 
//import '../components/contactGlobal.css';

import React from 'react'
import Typewriter from "typewriter-effect";
import HamburgerMenu from '../components/HamburgerMenu';

function contact() {
  return (
    <div>
    <HamburgerMenu isHome={false} />
    <div className={styles.container}>
      <div className={styles.title}>
      <Typewriter options={{
      autoStart: true,
      delay: 'natural'
    }}
    onInit={(Typewriter)=> {
      Typewriter
      .typeString("Contact Me")
      .start();
      }}
      />
      </div>
      <div className={styles.content}>
        <p>
          You can contact me via my <a href="https://discord.com/users/736028271153512489" target="_blank"rel="noopener noreferrer">discord</a>
          , which I am most active on, or my email which i look at bi-weekly~ish, <a href="mailto:general@badping.live">general@badping.live</a>.
        </p>
      </div>
    </div>
    </div>
  )
}

export default contact