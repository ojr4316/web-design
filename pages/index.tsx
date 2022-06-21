import type { NextPage } from "next";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import intro from "../public/intro.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faGaugeHigh, faLaptop } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.intro}>
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
        </div>
        <section id="about" className={styles.about}>
          <h2 className={styles.primary_header}> What do we do? </h2>
          <p className={styles.primary_text}>
            Create fast, well-designed, usable websites that promote business
            and attract customers.
          </p>
          <p className={styles.primary_text}>
            Using the latest, most up-to-date technologies available, we are
            able to produce lightweight, effective websites for all devices.
          </p>
          <div className={styles.icons}>
            <div className={styles.icon_container}>
              <FontAwesomeIcon icon={faLaptop} className={styles.icon} />
              <h5 className={styles.small_header}>Modern Websites</h5>
              <p className={styles.secondary_text}>With top-notch technology, lightweight websites are easier than ever to create.</p>
            </div>
            <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faGaugeHigh} className={styles.icon}/>
              <h5 className={styles.small_header}>Quick Delivery</h5>
              <p className={styles.secondary_text}>We aim to deliver our sites within 1-2 weeks after the initial meeting.</p>
            </div>
            <div className={styles.icon_container}>
            <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon}/>
              <h5 className={styles.small_header}>24/7 Support</h5>
              <p className={styles.secondary_text}>Issues on the fly are a pain. That&apos;s why we&apos;re always available and happy to help!</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
