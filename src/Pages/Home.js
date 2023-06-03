// Local CSS
import styles from "../components/home.module.css";
// Global CSS
import "../components/homeGlobal.css";

import HamburgerMenu from "../components/HamburgerMenu";
import Typewriter from "typewriter-effect";
import React, { useState, useEffect } from "react";
import Flicking from "@egjs/react-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  tomorrowNight,
  gruvboxDark,
  atelierForestDark,
  a11yLight,
  isblEditorLight,
  atomOneLight,
  qtcreatorLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  useEffect(() => {
    const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDarkMode(mediaQueryList.matches);
    const listener = (event) => {
      setIsDarkMode(event.matches);
    };
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, []);
  return isDarkMode;
}

const MyCarousel = (props) => {
  const isDarkMode = useDarkMode();
  const { content1, content2, content3, content4, contentLang } = props;
  const plugins = [
    new AutoPlay({ duration: 10000, direction: "NEXT", stopOnHover: true }),
  ];
  return (
    <Flicking circular={true} renderOnlyVisible={true} plugins={plugins}>
      <div className={styles.code}>
        <SyntaxHighlighter
          language={contentLang}
          style={isDarkMode ? atomOneDark : a11yLight}
          showLineNumbers
          wrapLines
        >
          {content1}
        </SyntaxHighlighter>
      </div>
      <div className={styles.code}>
        <SyntaxHighlighter
          language={contentLang}
          style={isDarkMode ? tomorrowNight : isblEditorLight}
          showLineNumbers
          wrapLines
        >
          {content2}
        </SyntaxHighlighter>
      </div>
      <div className={styles.code}>
        <SyntaxHighlighter
          language={contentLang}
          style={isDarkMode ? gruvboxDark : atomOneLight}
          showLineNumbers
          wrapLines
        >
          {content3}
        </SyntaxHighlighter>
      </div>
      <div className={styles.code}>
        <SyntaxHighlighter
          language={contentLang}
          style={isDarkMode ? atelierForestDark : qtcreatorLight}
          showLineNumbers
          wrapLines
        >
          {content4}
        </SyntaxHighlighter>
      </div>
    </Flicking>
  );
};

MyCarousel.CONTAINER_STYLE = {
  justifyContent: "center",
  alignItems: "middle",
};

MyCarousel.CARD_STYLE = {
  width: "100%",
  height: "100%",
  paddingTop: "1px",
  fontSize: "1.1vh",
  borderRadius: "10px",
  boxSizing: "border-box",
};

function MyCarouselWrapper({ contentType }) {
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [content3, setContent3] = useState("");
  const [content4, setContent4] = useState("");

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
  const isDarkMode = useDarkMode();
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
    <div className={styles.page} id="page">
      <div id="header" className={styles.header}>
        <HamburgerMenu isHome={true} />
        <div id="header" className={styles.title}>
          <Typewriter
            options={{
              autoStart: true,
              delay: "natural",
            }}
            onInit={(Typewriter) => {
              Typewriter.typeString("BadPingHere").start();
            }}
          />
        </div>
        <h2>
          I'm a <span>16</span> year old developer
        </h2>
        <h2>
          proficient in{" "}
          <span
            className={styles["lang-button"]}
            style={{ color: "#f1c400" }}
            data-panel="Python"
            onClick={() => handleSpanClick("python")}
          >
            Python
            <span
              className={styles.underline}
              style={{ backgroundColor: "#f1c400" }}
            ></span>
          </span>
          ,{" "}
          <span
            className={styles["lang-button"]}
            style={{ color: "#474A8A" }}
            data-panel="PHP"
            onClick={() => handleSpanClick("php")}
          >
            PHP
            <span
              className={styles.underline}
              style={{ backgroundColor: "#474A8A" }}
            ></span>
          </span>
          ,{" "}
          <span
            className={styles["lang-button"]}
            style={{ color: "#f16529" }}
            data-panel="JS"
            onClick={() => handleSpanClick("javascript")}
          >
            Javascript
            <span
              className={styles.underline}
              style={{ backgroundColor: "#f16529" }}
            ></span>
          </span>
          , and more.
        </h2>
        <div id="images">
          <a
            className={styles.socialmedia}
            href="https://github.com/BadPingHere"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                isDarkMode
                  ? "https://cdn.simpleicons.org/github/white"
                  : "https://cdn.simpleicons.org/github/black"
              }
              alt="Github Logo"
            ></img>
          </a>
          <a
            className={styles.socialmedia}
            href="https://discord.com/users/736028271153512489"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={
                isDarkMode
                  ? "https://cdn.simpleicons.org/discord/white"
                  : "https://cdn.simpleicons.org/discord/black"
              }
              alt="Github Logo"
            ></img>
          </a>
        </div>
      </div>
      <div id="content" className={styles.content}>
        <div
          className={`${styles.fade} ${
            ["python", "php", "javascript"].includes(currentDiv)
              ? styles.fadein
              : ""
          }`}
        >
          <MyCarouselWrapper contentType={currentDiv} />
        </div>
      </div>
    </div>
  );
}
export default Home;
