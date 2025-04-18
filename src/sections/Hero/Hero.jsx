import React from "react";
import styles from "./Hero.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import info from "../../info.json";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/avinash-mani-kiran-resume.pdf";
import { useTheme } from "../../common/ThemeContext.jsx";
import { MdOutlineFileDownload } from "react-icons/md";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Avinash Mani Kiran"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          onClick={toggleTheme}
          alt="Theme icon"
        />
      </div>
      <div className={styles.info}>
        <h1 className={styles.heroTitle}>
          {info.firstName + " " + info.lastName}
        </h1>
        <h2 className={styles.heroSubtitle}>Full-Stack Developer</h2>

        <span>
          <a href={info.profiles.Twitter.url} target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href={info.profiles.GitHub.url} target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href={info.profiles.LinkedIn.url} target="_blank">
            <img src={linkedInIcon} alt="Linkedin Icon" />
          </a>
        </span>
        <p className={styles.heroDescription}>{info.description}</p>
        <a href={resume} download={true}>
          <button className={styles.downloadBtn}>
            <MdOutlineFileDownload />
            <span>Resume</span>
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
