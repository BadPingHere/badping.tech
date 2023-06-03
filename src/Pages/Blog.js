// Local CSS
import styles from "../components/blog.module.css";

// Global CSS
import "../fonts/fonts-post.css";
import "../fonts/fonts-shared.css";

import React from "react";
import HamburgerMenu from "../components/HamburgerMenu";

function Blog() {
  return (
    <div>
      <style>
        {`
        h1 {
          font-family: Montserrat, sans-serif;
          font-weight: 900;
          text-rendering: optimizeLegibility;
          font-size: 1.98818rem;
          line-height: 2.625rem;
          margin-bottom: 0;
          margin-top: 0;
        }
        h1 > a {
          box-shadow: none;
          text-decoration: none;
          color: #fff;
        }
        a {
          box-shadow: 0 1px 0 0 currentColor;
          color: var(--textLink);
          text-decoration: none;
        }
        a:hover,
        a:active {
          box-shadow: none;
        }
        p {
          margin: 0;
        }
        
        body {
          --pink: rgb(255, 167, 196);
          background-color: var(--bg);
          -webkit-font-smoothing: antialiased;
        
          --bg: #282c35;
          --bg-secondary: rgb(54, 60, 72);
          --header: #ffffff;
          --textNormal: rgba(255, 255, 255, 0.88);
          --textTitle: #ffffff;
          --textLink: rgba(74, 116, 255, 0.8);
          --hr: hsla(0, 0%, 100%, 0.2);
          --inlineCode-bg: rgba(115, 124, 153, 0.2);
          --inlineCode-text: #e6e6e6;
          --form-shadow: 0 2px 15px 0 rgba(26, 26, 27, 0.637);
          font: 100%/1.75 "Merriweather", "Georgia", serif;
          font-weight: normal;
          font-family: "Merriweather", "Georgia", serif;
          font-kerning: auto;
          font-feature-settings: normal;
        }
        
        `}
      </style>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inconsolata&display=swap"
        rel="stylesheet"
      ></link>
      <div className={styles.container} tabIndex={-1}>
        <div className={styles.containerInner}>
          <HamburgerMenu isHome={false} />
          <div className={styles.content}>
            <header className={styles.title}>
              <h1>
                <a href="/">Blog</a>
              </h1>
            </header>
            <main>
              <article>
                <header>
                  <h3 className={styles.articleTitle}>
                    <a
                      style={{ boxShadow: "none" }}
                      href="/blog/is-ai-good-for-society"
                    >
                      Is AI good for society?
                    </a>
                  </h3>
                  <small>June 3, 2023{/* */} • 4 min read</small>
                </header>
                <p>Spoiler alert: it's not.</p>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
