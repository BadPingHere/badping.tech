// Local CSS
import styles from '../components/home.module.css';
// Global CSS 
import '../components/homeGlobal.css';

import HamburgerMenu from '../components/HamburgerMenu';
import Typewriter from "typewriter-effect";
import React, { useState, useEffect, Component } from 'react';
import ReactCardCarousel from "react-card-carousel";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark, tomorrowNight, gruvboxDark, atelierForestDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class MyCarousel extends Component {
  render() {
    const { content1 } = this.props;
    const { content2 } = this.props;
    const { content3 } = this.props;
    const { content4 } = this.props;
    const { contentLang } = this.props;
    return (
      <div style={MyCarousel.CONTAINER_STYLE}>
        <ReactCardCarousel autoplay={false} autoplay_speed={5000} disable_box_shadow spread="narrow">
          <div style={MyCarousel.CARD_STYLE}>
            <div className={styles.code}>
              <SyntaxHighlighter language={contentLang} style={atomOneDark} showLineNumbers wrapLines>
                {content1}
              </SyntaxHighlighter>
            </div>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <div className={styles.code}>
              <SyntaxHighlighter language={contentLang} style={tomorrowNight} showLineNumbers wrapLines>
                {content2}
              </SyntaxHighlighter>
            </div>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <div className={styles.code}>
              <SyntaxHighlighter language={contentLang} style={gruvboxDark} showLineNumbers wrapLines>
                {content3}
              </SyntaxHighlighter>
            </div>
          </div>
          <div style={MyCarousel.CARD_STYLE}>
            <div className={styles.code}>
              <SyntaxHighlighter language={contentLang} style={atelierForestDark} showLineNumbers wrapLines>
                {content4}
              </SyntaxHighlighter>
            </div>
          </div>
        </ReactCardCarousel>
      </div>
    );
  }

  static get CONTAINER_STYLE() {
    return {
      position: "relative",
      height: "80vh",
      width: "80vw",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle"
    };
  }

  static get CARD_STYLE() {
    return {
      height: "600px",
      width: "600px",
      paddingTop: "1px",
      fontSize: "12px",
      borderRadius: "10px",
      boxSizing: "border-box"
    };
  }
}

function MyCarouselWrapper({ contentType }) {
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [content3, setContent3] = useState('');
  const [content4, setContent4] = useState('');

  // Get file contents from local
  useEffect(() => {
    fetch(`/codefiles/${contentType}1.txt`)
      .then((response) => response.text())
      .then((text) => setContent1(text));
    fetch(`/codefiles/${contentType}2.txt`)
      .then((response) => response.text())
      .then((text) => setContent2(text));
    fetch(`/codefiles/${contentType}3.txt`)
      .then((response) => response.text())
      .then((text) => setContent3(text));
    fetch(`/codefiles/${contentType}4.txt`)
      .then((response) => response.text())
      .then((text) => setContent4(text));
  }, [contentType]);

  return (
    <MyCarousel
      content1={content1}
      content2={content2}
      content3={content3}
      content4={content4}
      contentLang={contentType}
    />
  );
} 
function Home() {
  const [currentDiv, setCurrentDiv] = useState(null);
  // Handle what Span is clicked, and what div's to show
  const handleSpanClick = (div) => {
    if (currentDiv === div) {
      setCurrentDiv(null);
    } else {
      setCurrentDiv(div);
    }
  };
  return (
    <div className={styles.site}>
      <HamburgerMenu isHome={true} />
      <div className={styles.title}>
        <Typewriter options={{
        autoStart: true,
        delay: 'natural'
      }}
      onInit={(Typewriter)=> {
        Typewriter
        .typeString("BadPingHere")
        .start();
        }}
        />
        </div>
      <div className={styles.content}>
        <h2>
          I'm a <span>16</span> year old developer
        </h2>
        <h2>
          proficient in <span className={styles['lang-button']} style={{color:"#ffdd48"}} data-panel="Python" onClick={() => handleSpanClick('python')}>Python<span className={styles.underline} style={{backgroundColor:"#ffdd48"}}></span></span>
          , <span className={styles['lang-button']} style={{color:"#474A8A"}} data-panel="PHP" onClick={() => handleSpanClick('php')}>PHP<span className={styles.underline} style={{backgroundColor:"#474A8A"}}></span></span>
          , <span className={styles['lang-button']} style={{color:"#f16529"}} data-panel="JS" onClick={() => handleSpanClick('javascript')}>Javascript<span className={styles.underline} style={{backgroundColor:"#f16529"}}></span></span>, and more.
        </h2>
        <div id="images">
          <a className={styles.socialmedia} href="https://github.com/BadPingHere" target="_blank" rel="noopener noreferrer"><img src="https://cdn.simpleicons.org/github/white" alt="Github Logo"></img></a>
          <a className={styles.socialmedia} href="https://discord.com/users/736028271153512489" target="_blank"rel="noopener noreferrer"><img src="https://cdn.simpleicons.org/discord/white" alt="Github Logo"></img></a>
        </div>
        <div className={`${styles.fade} ${['python', 'php', 'javascript'].includes(currentDiv) ? styles.fadein : ''}`}>
          <MyCarouselWrapper contentType={currentDiv} />
        </div>
      </div>
    </div>
  );
}
export default Home;
