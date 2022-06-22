import Head from "next/head";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

type Props = {
  children?: ReactNode;
};

export default function Layout(props: Props) {
  const [navBackground, setNavBackground] = useState("transparent");
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setNavBackground("#0071F2");
    } else {
      setNavBackground("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);

    // Remove the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  return (
    <div className={styles.main_container}>
      <Head>
        <title>Couple of Cards</title>
        <meta name="description" content="Web design and development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header
        className={styles.header}
        style={{ backgroundColor: navBackground }}
      >
        <div className={styles.header_container}>
          <Link href="/#intro">
            <h1 className={styles.name} style={navBackground == "#0071F2" ? {color: 'white', transitionDuration: '.3s'} : {}}>
              Couple of <span className={styles.name_blue}>Cards</span>
            </h1>
          </Link>
          <nav className={styles.nav}>
            <Link href="/#about">
              <p className={styles.link} style={navBackground == "#0071F2" ? {color: 'white', transitionDuration: '.3s'} : {}}>About</p>
            </Link>
            <Link href="/#our_team">
              <p className={styles.link} style={navBackground == "#0071F2" ? {color: 'white', transitionDuration: '.3s'} : {}}>Our Team</p>
            </Link>
            <Link href="/#portfolio">
              <p className={styles.link} style={navBackground == "#0071F2" ? {color: 'white', transitionDuration: '.3s'} : {}}>Portfolio</p>
            </Link>
            <Link href="/#contact">
              <p className={styles.link_button}>Contact</p>
            </Link>
          </nav>
        </div>
      </header>
      <main className={styles.content}>{props.children}</main>
      <footer className={styles.footer}>
        <div className={styles.footer_container}>
          <div className={styles.footer_col}>
            <h1 className={styles.name} style={{color: 'white'}}>Couple of Cards</h1>
            <p>info@coupleofcards.com</p>
            <p>{"(999)"}999-9999</p>
            <p>Tri-State Area Based</p>
          </div>
          <div className={styles.footer_col_socials}>
            <Link href="/#contact">
              <FontAwesomeIcon icon={faTwitter} className={styles.footer_icon}/>
            </Link>
            <Link href="/#contact">
              <FontAwesomeIcon icon={faInstagram} className={styles.footer_icon}/>
            </Link>
            <Link href="/#contact">
              <FontAwesomeIcon icon={faFacebook} className={styles.footer_icon}/>
            </Link>
            <Link href="/#contact">
              <FontAwesomeIcon icon={faLinkedin} className={styles.footer_icon}/>
            </Link>
            <Link href="/#contact">
              <FontAwesomeIcon icon={faGithub} className={styles.footer_icon}/>
            </Link>
            <Link href="/#contact">
              <FontAwesomeIcon icon={faYoutube} className={styles.footer_icon}/>
            </Link>
          </div>
          <div className={styles.footer_col}>
            <h1 className={styles.name} style={{color: 'white'}}>Terms of Use</h1>
            <p>Cookie Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
