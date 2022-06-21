import Head from "next/head";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import styles from "../styles/Layout.module.css";

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
        <h1 className={styles.name}>Couple of <span className={styles.name_blue}>Cards</span></h1>
        <nav className={styles.nav}>
          <Link href=""><p className={styles.link}>About</p></Link>
          <Link href=""><p className={styles.link}>Our Team</p></Link>
          <Link href=""><p className={styles.link}>Portfolio</p></Link>
          <Link href=""><p className={styles.link_button}>Contact</p></Link>
        </nav>
      </header>
      <main className={styles.content}>{props.children}</main>
    </div>
  );
}
