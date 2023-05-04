// Local CSS
import styles from "../components/projects.module.css";
// Global CSS
import "../components/projectsGlobal.css";

import React, { useState, useEffect } from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import ReactFullpage from "@fullpage/react-fullpage";
import externalWhite from "../external_link.png";
import externalBlack from "../external_link_black.png";

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

function DisplayProject({
  projectName,
  languages,
  projectDetails,
  githubLink,
  externalLink,
}) {
  const isDarkMode = useDarkMode();
  const gitSrc = isDarkMode
    ? "https://cdn.simpleicons.org/github/white"
    : "https://cdn.simpleicons.org/github/black";
  const extSrc = isDarkMode ? externalWhite : externalBlack;
  return (
    <div className={styles.card}>
      <div className={styles.infoholder}>
        <h2 className={styles.title}>{projectName}</h2>
        <div className={styles.images}>
          {languages.map((language) => (
            <div className={styles.socialmedia}>
              <img
                src={`https://cdn.simpleicons.org/${language}`}
                alt={`${language} Logo`}
              ></img>
            </div>
          ))}
        </div>
        <p>{projectDetails}</p>
        <div className={styles.images}>
          <a
            className={styles.socialmedia}
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={gitSrc} alt="Github Logo"></img>
          </a>
          {externalLink && (
            <a
              className={styles.socialmedia}
              href={externalLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={styles.externalurl}
                src={extSrc}
                alt="External Link Logo"
              ></img>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    loopTop={true}
    loopBottom={true}
    navigation
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <DisplayProject
              projectName="badping.live" // Project Name
              languages={["javascript", "css3"]} // Languages
              projectDetails="The entire code for the site you're on, badping.live. Made with my personal worst framework, react." // Project Details
              githubLink="https://github.com/BadPingHere/badping.live" // Github Link
              externalLink="https://badping.live" // External Link (Optional)
            />
          </div>
          <div className="section">
            <DisplayProject
              projectName="talk.badping.live" // Project Name
              languages={["php", "css3", "javascript"]} // Languages
              projectDetails="A shoutbox application, with a nice ol' stolen login page. Used to be my biggest project, now look at me." // Project Details
              githubLink="https://github.com/BadPingHere/talk.badping.live" // Github Link
              externalLink="https://talk.badping.live" // External Link (Optional)
            />
          </div>
          <div className="section">
            <DisplayProject
              projectName="Trusted" // Project Name
              languages={["python", "php", "css3"]} // Languages
              projectDetails="A easy-to-use Scraper and Web UI for the game Untrusted. This took a long time, and I'm really happy with the result." // Project Details
              githubLink="https://github.com/BadPingHere/Trusted" // Github Link
            />
          </div>
          <div className="section">
            <DisplayProject
              projectName="Youtube Downloader" // Project Name
              languages={["python"]} // Languages
              projectDetails="A python youtube downloader, allowing for downloads of to 1440p, and with options to include audio and thumbnails, which oddly a lot of project's do not." // Project Details
              githubLink="https://github.com/BadPingHere/Youtube-DL" // Github Link
            />
          </div>
          <div className="section">
            <DisplayProject
              projectName="Startup" // Project Name
              languages={["python"]} // Languages
              projectDetails="A startup python script I personally use every time I launch my computer. It has it's quirks, but it works well for me." // Project Details
              githubLink="https://github.com/BadPingHere/startup" // Github Link
            />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

function Projects() {
  return (
    <div className={styles.app}>
      <HamburgerMenu isHome={false} />
      <style>
        {`
        #fp-nav ul li a span, 
        .fp-slidesNav ul li a span {
            background: #b9b9b9;
        }
        #fp-nav.fp-right {
          z-index: 0;
         }
      `}
      </style>
      <Fullpage />
    </div>
  );
}

export default Projects;
