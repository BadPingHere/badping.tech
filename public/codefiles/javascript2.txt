// Local CSS
import styles from '../components/404.module.css';
// Global CSS 
//import '../components/contactGlobal.css';

import React from 'react'
import Typewriter from "typewriter-effect";
import HamburgerMenu from '../components/HamburgerMenu';


function NotFound() {
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
      .typeString("404 Not Found")
      .start();
      }}
      />
      </div>
      <div className={styles.content}>
        <p>
          The page you are looking for does not exist, or has been moved. Go back to the <a href="/">home page</a>?
        </p>
      </div>
    </div>
    </div>
  )
}

export default NotFound