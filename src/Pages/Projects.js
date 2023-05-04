// Local CSS
import styles from "../components/projects.module.css";
// Global CSS
import "../components/projectsGlobal.css";

import React from "react";
import HamburgerMenu from "../components/HamburgerMenu";
import ReactFullpage from "@fullpage/react-fullpage";
import external from "../external_link.png";

function displayProject(
  projectName,
  languages,
  projectDetails,
  githubLink,
  externalLink
) {
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
            <img
              src="https://cdn.simpleicons.org/github/white"
              alt="Github Logo"
            ></img>
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
                src={external}
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
    render={() => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            {displayProject(
              "badping.live", // Project Name
              ["javascript", "css3"], // Languages
              "The entire code for the site you're on, badping.live. Made with my personal worst framework, react.", // Project Details
              "https://github.com/BadPingHere/badping.live", // Github Link
              "https://badping.live" // External Link (Optional)
            )}
          </div>
          <div className="section">
            {displayProject(
              "talk.badping.live", // Project Name
              ["php", "css3", "javascript"], // Languages
              "A shoutbox application, with a nice ol' stolen login page. Used to be my biggest project, now look at me.", // Project Details
              "https://github.com/BadPingHere/talk.badping.live", // Github Link
              "https://talk.badping.live" // External Link (Optional)
            )}
          </div>
          <div className="section">
            {displayProject(
              "Trusted", // Project Name
              ["python", "php", "css3"], // Languages
              "A easy-to-use Scraper and Web UI for the game Untrusted. This took a long time, and I'm really happy with the result.", // Project Details
              "https://github.com/BadPingHere/Trusted" // Github Link
            )}
          </div>
          <div className="section">
            {displayProject(
              "Youtube Downloader", // Project Name
              ["python"], // Languages
              "A python youtube downloader, allowing for downloads of to 1440p, and with options to include audio and thumbnails, which oddly a lot of project's do not.", // Project Details
              "https://github.com/BadPingHere/Youtube-DL" // Github Link
            )}
          </div>
          <div className="section">
            {displayProject(
              "Startup", // Project Name
              ["python"], // Languages
              "A startup python script I personally use every time I launch my computer. It has it's quirks, but it works well for me.", // Project Details
              "https://github.com/BadPingHere/startup" // Github Link
            )}
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
