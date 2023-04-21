// Local CSS
import styles from '../components/blog.module.css';
// Global CSS 
//import '../components/contactGlobal.css';

import React from 'react'
import Typewriter from "typewriter-effect";
import HamburgerMenu from '../components/HamburgerMenu';

function Blog() {
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
      .typeString("Work in Progress")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Under Construction")
      .start();
      }}
      />
      </div>
      <div className={styles.content}>
        <p>
          The page you are looking for is currently under construction. Go back to the <a href="/">home page</a> ?
        </p>
      </div>
    </div>
    </div>
  )
}

export default Blog