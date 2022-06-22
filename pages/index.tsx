import type { NextPage } from "next";
import Layout from "../components/Layout";
import layoutStyles from "../styles/Layout.module.css";
import styles from "../styles/Home.module.css";
import intro from "../public/intro.png";
import john from "../public/john.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faGaugeHigh,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

export default function Home() {
  const [cardPos, setCardPos] = useState(0);
  const handleScroll = () => {
    if (window.scrollY > 1500) {
      setCardPos(1);
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
    <Layout>
      <div className={styles.container}>
        <section id="intro" className={styles.intro}>
          <div className={styles.intro_left}>
            <h2 className={styles.primary_header}> Got an idea? </h2>
            <h4 className={styles.secondary_header}>
              Imagine it. Design it. Create it.
            </h4>
            <p className={styles.primary_text}>
              The fastest delivery of modern websites that suit your businesses
              need in the Tri-State Area.
            </p>
            <button className={styles.primary_button}>Get In Contact</button>
          </div>
          <img
            src={intro.src}
            alt="Intro Image"
            className={styles.intro_image}
          />
        </section>
        <section id="about" className={styles.about}>
          <h2 className={styles.primary_header}> What do we do? </h2>
          <p className={styles.primary_text}>
            Create{" "}
            <span className={styles.primary_text_b}>
              fast, well-designed, usable websites
            </span>{" "}
            that promote business and attract customers.
          </p>
          <p className={styles.primary_text}>
            Using the{" "}
            <span className={styles.primary_text_b}>
              latest, most up-to-date technologies available
            </span>
            , we are able to produce{" "}
            <span className={styles.primary_text_b}>
              lightweight, effective websites
            </span>{" "}
            for <span className={styles.primary_text_b}>all devices</span>.
          </p>
          <div className={styles.icons}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
              <h5 className={styles.small_header}>Modern Websites</h5>
              <p className={styles.secondary_text}>
                With top-notch technology, lightweight websites are easier than
                ever to create.
              </p>
            </div>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faGaugeHigh} className={styles.icon} />
              <h5 className={styles.small_header}>Quick Delivery</h5>
              <p className={styles.secondary_text}>
                We aim to deliver our sites within 1-2 weeks after the initial
                meeting.
              </p>
            </div>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
              <h5 className={styles.small_header}>24/7 Support</h5>
              <p className={styles.secondary_text}>
                Issues on the fly are a pain. That&apos;s why we&apos;re always
                available and happy to help!
              </p>
            </div>
          </div>
        </section>
        <section id="our_team" className={styles.our_team}>
          <h2 className={styles.primary_header}> Who are we? </h2>
          <p className={styles.primary_text}>
            Get to know the
            <span className={styles.primary_text_b}> lovely faces</span> behind
            the scenes of Couple of
            <span className={styles.primary_text_b}> Cards</span>.
          </p>
          <div className={styles.card_container}>
            <div
              className={styles.card_main3}
            >
              <img
                src={john.src}
                alt="John Josephsen"
                className={styles.card_image}
              />
              <div className={styles.card_info}>
                <h5 className={styles.card_name}>John Josephsen</h5>
                <h5 className={styles.card_role}>Web Developer</h5>
                <h5 className={styles.card_role}>UI/UX Design + NextJS</h5>
              </div>
            </div>
            <div
              className={styles.card_main2}
            >
              <img
                src={john.src}
                alt="John Josephsen"
                className={styles.card_image}
              />
              <div className={styles.card_info}>
                <h5 className={styles.card_name}>John Josephsen</h5>
                <h5 className={styles.card_role}>Web Developer</h5>
                <h5 className={styles.card_role}>UI/UX Design + NextJS</h5>
              </div>
            </div>
            <div
              className={styles.card_main}
            >
              <img
                src={john.src}
                alt="John Josephsen"
                className={styles.card_image}
              />
              <div className={styles.card_info}>
                <h5 className={styles.card_name}>John Josephsen</h5>
                <h5 className={styles.card_role}>Web Developer</h5>
                <h5 className={styles.card_role}>UI/UX Design + NextJS</h5>
              </div>
            </div>
          </div>
        </section>
        <section id="portfolio" className={styles.portfolio}>
          <h2 className={styles.primary_header}> Some of our past work </h2>
          <p className={styles.primary_text}>
            Check out some of our{" "}
            <span className={styles.primary_text_b}>
              top rates clients and their reviews
            </span>{" "}
            of our work!
          </p>
        </section>
        <section id="contact" className={styles.contact}>
          <h2 className={styles.primary_header}> Contact us today! </h2>
          <p className={styles.primary_text}>
            Get in contact with our{" "}
            <span className={styles.primary_text_b}>
              best-in-class developers
            </span>{" "}
            and let&apos;s start{" "}
            <span className={styles.primary_text_b}>
              making your idea a reality
            </span>
            .
          </p>
        </section>
      </div>
    </Layout>
  );
}
