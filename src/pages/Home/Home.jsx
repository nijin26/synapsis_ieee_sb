import React, { useState } from "react";
import { Button, Modal } from "@material-ui/core";

//image
import tkmitLogo from "../../assets/hero_section/tkmit.png";
import heroRight from "../../assets/hero_section/bg.png";
import header from "../../assets/home/speakers_header.png";

//styles
import styles from "./Home.module.scss";

//Components

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero_left}>
          <div className={styles.hero_left_date}>June 17 - 20</div>
          <img src={tkmitLogo} alt="tkmit_logo" />
          <p>Department Of Biomedical Engineering</p>
          <p className={styles.lead}>Discover the difference</p>
          <h1>Synapsis'</h1>
          <h2>21</h2>
          <p className={styles.lead}>
            Streamlining the Digitalization in Healthcare amidst Pandemic
          </p>
        </div>
        <div className={styles.hero_right}>
          <img src={heroRight} alt="bg" />
        </div>
      </section>
      <section className={styles.about}>
        <div className={styles.about_card}>
          <p>
            <b> Hello There!</b>
            <br />
            <br />
            SYNAPSIS '21 marshal as a collaborative venture put forth by{" "}
            <b>BLAZE TKMIT </b> an organization of{" "}
            <b>
              Department of Biomedical Engineering TKM Institute of Technology
            </b>{" "}
            in association with{" "}
            <em>
              IEEE EMBS Kerala Chapter, IEEE EMBS SBC TKMIT, IEEE SB TKMIT
            </em>{" "}
            with the support of Telemedicine Society and Digital Health India,
            Kerala, is here to anchorage the new lug in health care.
          </p>
          <br />
          <h3>Pre-Synapsis</h3>
          <br />
          <p>
            Pre-Synapsis was a four-day event that was blessed with the session
            of Abdul Rahman Sheriff (Medical Device Consultant) and our
            enthusiastic seniors who were the pillars of our Department
            Organization, BLAZE.
            <br />
            <br />
            The programme was conducted on the days of 29, 30 of May 2021 and 2,
            4 of June 2021. The event started with the session on the topic
            <b>'Opportunities in Med-Tech Industry'</b> by Abdul Rahman Sheriff
            a Medical Device Consultant and followed by our seniors motivating
            with their experience and successful journey till the present. They
            were, Julian Gerald Dcruz, Arshid S, Ardra Asok, Aminath Sabeena,
            Fousia Yousaf, Midhila P and Ashif Mohammed.
            <br />
            <br />
            The event was also embellished by a prototyping competition
            <b> Protomata on 2nd June 2021</b> . It helped the participants to
            familiarize themselves with virtual prototyping and to develop
            problem-solving skills. The competition was a full-day event.
            <br />
            <br />
            Overall, Pre-Synapsis was a clear cut introduction four our main
            event that to be conducted on <b> 17th June 2021: Synapsis ’21</b>
          </p>
        </div>
      </section>
      <section className={styles.speakers}>
        <img src={header} alt="header" />
      </section>
    </div>
  );
};

export default Home;
