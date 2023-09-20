// Local CSS
import styles from "../../components/blog.module.css";

// Global CSS
import "../../fonts/fonts-post.css";
import "../../fonts/fonts-shared.css";

import HamburgerMenu from "../../components/HamburgerMenu";
import ReactMarkdown from "react-markdown";
import React, { useState, useEffect } from "react";
import README from "../blog/is-ai-good-for-society.md";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const flatten = (text, child) => {
  return typeof child === "string"
    ? text + child
    : React.Children.toArray(child.props.children).reduce(flatten, text);
};

const HeadingRenderer = (props) => {
  const children = React.Children.toArray(props.children);
  const text = children.reduce(flatten, "");
  const slug = text.toLowerCase().replace(/\W/g, "-");
  return React.createElement("h" + props.level, { id: slug }, props.children);
};
function Blog() {
  let [content, setContent] = useState({ md: "" });

  useEffect(() => {
    fetch(README)
      .then((res) => res.text())
      .then((md) => {
        setContent({ md });
      });
  }, []);

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
          box-shadow: 0 1.1px 0 0 currentColor;
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
        blockquote {
          border-left: 5px solid #ccc;
          margin: 1.5em 10px;
          padding: 0.5em 10px;
        }
        img {
          width: 100%;
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
              <h3 className={styles.articleTitle}>
                <a
                  style={{
                    boxShadow: "none",
                    textDecoration: "none",
                    color: "rgb(170, 189, 255)",
                  }}
                  href="/blog"
                >
                  Blog
                </a>
              </h3>
            </header>
            <main>
              <article>
                <header>
                  <h1 className={styles.articleName}>
                    Is AI good for society?
                  </h1>
                  <p className={styles.articleDate}>
                    June 3, 2023 • 4 min read
                  </p>
                </header>
                <div id="blogpost">
                  <ReactMarkdown
                    children={content.md}
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[
                      rehypeRaw,
                      rehypeAutolinkHeadings,
                      rehypeSlug,
                    ]}
                    components={{
                      heading: HeadingRenderer,
                      code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || "");
                        return !inline && match ? (
                          <SyntaxHighlighter
                            {...props}
                            children={String(children).replace(/\n$/, "")}
                            style={a11yDark}
                            language={match[1]}
                            PreTag="div"
                          />
                        ) : (
                          <code {...props} className={className}>
                            {children}
                          </code>
                        );
                      },
                    }}
                  />
                </div>
              </article>
            </main>
            <aside>
              <h3 className={styles.articleTitle}>
                <a
                  style={{
                    boxShadow: "none",
                    textDecoration: "none",
                    color: "rgb(170, 189, 255)",
                  }}
                  href="/#/blog"
                >
                  Blog
                </a>
              </h3>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Blog;
