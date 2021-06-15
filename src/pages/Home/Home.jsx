import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";
import Tada from "react-reveal/Tada";

import { Modal, Fade as FadeIn } from "@material-ui/core";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import Slider from "../../components/Slider/Slider";

//image
import tkmitLogo from "../../assets/hero_section/tkmit.png";
import heroRight from "../../assets/hero_section/bgc.png";
import header from "../../assets/home/speakers_header.png";
import mohnan from "../../assets/speakers/mohanan kunnumel.jpg";
import sudhamony from "../../assets/speakers/sudhamony.jpg";
import vimal from "../../assets/speakers/vimal wakhlu.png";
import prem from "../../assets/speakers/prem nair.jpg";
import uma from "../../assets/speakers/uma nambiar.jpg";
import sanjay from "../../assets/speakers/sanjay sood.png";
import murthy from "../../assets/speakers/murthy remilla.jpg";
import farooq from "../../assets/speakers/Farooq Ahmad Wani.jpeg";
import bijoy from "../../assets/speakers/Bijoy M.G.png";

//styles
import styles from "./Home.module.scss";

//Speakers Data

const speakers = [
  {
    id: 1,
    name: "PROF.(DR.) MOHANAN KUNNUMEL",
    about: `Vice-chancellor of the Kerala university of health
sciences. He spread his wings as the state president of the government medical college
teacher's association and as well as the president of the national radiological and imaging
association. `,
    image: mohnan,
    talkNum: "1",
    topic: `The Practice of Telemedicine and
 Teleradiology in India Today`,
    date: "Day-1 : June 17, 2021",
    time: `18:00-19:00 IST`,
  },

  {
    id: 2,
    name: "SMT. SUDHAMONY S",
    about: `Associate Director,CDAC (Retd) & Chief Consultant,eHealth Kerala Project
Directorate of Health Services
Department of Health & Family Welfare, Govt of Kerala
Wide-ranging experience in the field of Health Informatics like Medical Image Processing for automated detection of Cervical Cancer, Breast
Cancer, etc.  `,
    image: sudhamony,
    talkNum: "2",
    topic: "E-Health In Kerala",
    date: "Day-1 : June 17, 2021",
    time: `19:30-20:30 IST`,
  },

  {
    id: 3,
    name: "VIMAL WAKHLU",
    about: `Former Chairman and Managing Director of Telecommunications Consultant India Ltd.
Past President of The Telemedicine Society of India
Ex-Board Member of International Society for Telemedicine and eHealth
Telecom Professional with 44 years of Expertise
Certified PMP of Project Management Institute, Pennsylvania, US.`,
    image: vimal,
    talkNum: "2",
    topic: `Implementing Telemedicine
 and Digital Health, Leveraging
 Emerging Technologies`,
    date: "Day-2 : June 18, 2021",
    time: `19:30-20:30 IST`,
  },
  {
    id: 4,
    name: "DR PREM NAIR",
    about: `Medical Director, Amrita Institute of Medical Sciences and Research, Cochin, Kerala
MBBS: Bombay University, National Medical College
Internal Medicine-Bronx Hospital, Alberta Einstein College of Medicine, New YorkGastrointestinal and Liver Diseases Fellowship University of Southern California School of
Medicine, Los Angeles, California
FACP, FRCP`,
    image: prem,
    talkNum: "1",
    topic: `Application of Telemedicine
 and E-health -Amrita Experience `,
    date: "Day-2 : June 18, 2021",
    time: `18:00-19:00 IST`,
  },

  {
    id: 5,
    name: "DR.UMA NAMBIAR",
    about: `Neurosurgeon, Healthcare Administrator and International Healthcare Consultant Executive Director, Gimcare Hospital, Kannur, Kerala
Co-founder and Chairperson of Digital Health India Association
Vice President, TSI, Kerala Chapter
Chairperson, RMA Committee, Hemas Group of Hospitals, Sri Lanka
Member, Healthcare `,
    image: uma,
    talkNum: "2",
    topic: `Opportunities for Young
 Engineers in the Telehealth
 Ecosystem`,
    date: `DAY-3: June 19, 2021`,
    time: `19:30-20:30 IST`,
  },

  {
    id: 6,
    name: "DR.SANJAY SOOD",
    about: `Associate Director, Centre for Development of Advanced Computing(Mohali), India
Project Director, e-Sanjeevani
Dr Sood, a telemedicine consultant with WHO(AFRO) is also
conceptualising first of its
kind of a multi-tiered national telemedicine network for PLHIV
`,
    image: sanjay,
    talkNum: "1",
    topic: `Sanjeevani Digital Health
 Innovations in Practice`,
    date: `DAY-4: June 20, 2021`,
    time: `11:00-12:00 IST`,
  },

  {
    id: 7,
    name: "DR.MURTHY REMILLA",
    about: `Head, Project Management, Human Spaceflight Group, Human Space Program of India
Gaganyaan ISRO
Head of Supply Chain Management, ISRO Satellite Centre, Bangalore
25 years of rich cross-functional Experience covering the technical, business and
Managerial domains
`,
    image: murthy,
    talkNum: "3",
    topic: `Evolution and Growth of
 Telemedicine in India`,
    date: `DAY-4: June 20, 2021`,
    time: `19:30-20:30 IST`,
  },

  {
    id: 8,
    name: "ER.FAROOQ AHMAD WANI",
    about: `Superintending Engineer, Electronics and Communication, Sheri-i-Kashmir Institute of
Medical Science, Srinagar State Nodal Officer (Telemedicine), Jammu and Kashmir`,
    image: farooq,
    talkNum: "2",
    topic: `Leveraging Telemedicine in the
 Healthcare Delivery System in
 Jammu & Kashmir`,
    date: `DAY-4: June 20, 2021`,
    time: `18:00-19:00 IST`,
  },

  {
    id: 9,
    name: "BIJOY M.G",
    about: `Managing Director, Unarv Telemedicine and Healthcare Services
Executive Committee member, Telemedicine Society of India.`,
    image: bijoy,
    talkNum: "1",
    topic: `Telemedicine:
 Yesterday, Today and Tomorrow`,
    date: `DAY-3: June 19, 2021`,
    time: `18:00-19:00 IST`,
  },
];

const Home = () => {
  const [modal, setModal] = useState(false);
  const [speaker, setSpeaker] = useState({
    id: "",
    name: "",
    about: "",
    image: "",
    talkNum: "",
    topic: "",
    date: "",
    time: "",
  });

  const openModal = (id) => {
    speakers.map((speaker) => {
      if (speaker.id === id) {
        setSpeaker({
          id: speaker.id,
          name: speaker.name,
          about: speaker.about,
          image: speaker.image,
          talkNum: speaker.talkNum,
          topic: speaker.topic,
          date: speaker.date,
          time: speaker.time,
        });
      }
    });
    setModal(true);
  };

  const onCloseModal = () => {
    setModal(false);
    setSpeaker({
      id: "",
      name: "",
      about: "",
      image: "",
      talkNum: "",
      topic: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className={styles.container}>
      <section className={`${styles.hero} ${styles.grid}`}>
        <div className={styles.hero_left}>
          <div className={styles.hero_left_date}>June 17 - 20</div>
          <img src={tkmitLogo} alt="tkmit_logo" />
          <p>Department Of Biomedical Engineering</p>
          <p className={styles.lead}>Discover the difference</p>
          <Tada>
            <h1>Synapsis'</h1>
          </Tada>
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
          <Fade left cascade>
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
          </Fade>
          <Slide left>
            {" "}
            <h3>Pre-Synapsis</h3>
          </Slide>
          <br />
          <Fade left cascade>
            <p>
              Pre-Synapsis was a four-day event that was blessed with the
              session of Abdul Rahman Sheriff (Medical Device Consultant) and
              our enthusiastic seniors who were the pillars of our Department
              Organization, BLAZE.
              <br />
              <br />
              The programme was conducted on the days of 29, 30 of May 2021 and
              2, 4 of June 2021. The event started with the session on the topic
              <b>'Opportunities in Med-Tech Industry'</b> by Abdul Rahman
              Sheriff a Medical Device Consultant and followed by our seniors
              motivating with their experience and successful journey till the
              present. They were, Julian Gerald Dcruz, Arshid S, Ardra Asok,
              Aminath Sabeena, Fousia Yousaf, Midhila P and Ashif Mohammed.
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
          </Fade>
        </div>
      </section>
      <section className={`${styles.speakers} ${styles.grid}`}>
        <Slide left>
          <img src={header} alt="header" />
        </Slide>

        <Fade left>
          <div className={`${styles.speaker} ${styles.speaker1}`}>
            <img src={mohnan} alt="speaker1" />
            <div className={styles.body}>
              <h2>PROF.(DR.) MOHANAN KUNNUMEL</h2>
              <p>Vice-Chancellor, Kerala University of Health Sciences</p>
              <div className={styles.info_icon} onClick={() => openModal(1)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.speaker} ${styles.speaker2}`}>
            <div className={styles.body}>
              <h2>SMT. SUDHAMONY S</h2>
              <p>
                Chief Consultant, E-Health Kerala project, Dept. of Health &
                FW,Govt of Kerala
              </p>
              <div className={styles.info_icon} onClick={() => openModal(2)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
            <img src={sudhamony} alt="speaker2" />
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.speaker} ${styles.speaker1}`}>
            <img src={vimal} alt="speaker3" />
            <div className={styles.body}>
              <h2>VIMAL WAKHLU</h2>
              <p>
                Former Chairman & Managing Director of TCIL Former President,
                Telemedicine Society of India
              </p>
              <div className={styles.info_icon} onClick={() => openModal(3)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.speaker} ${styles.speaker2}`}>
            <div className={styles.body}>
              <h2>DR PREM NAIR</h2>
              <p>
                Medical Director, AIMS, Cochin, Kerala President, Telemedicine
                Society Of India Kerala Chapter
              </p>
              <div className={styles.info_icon} onClick={() => openModal(4)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
            <img src={prem} alt="speaker4" />
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.speaker} ${styles.speaker1}`}>
            <img src={uma} alt="speaker5" />
            <div className={styles.body}>
              <h2>DR.UMA NAMBIAR</h2>
              <p>
                Healthcare administrator and International healthcare consultant
                Executive Director, Gimcare Hospital
              </p>
              <div className={styles.info_icon} onClick={() => openModal(5)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.speaker} ${styles.speaker2}`}>
            <div className={styles.body}>
              <h2>DR.SANJAY SOOD</h2>
              <p>
                Project Director (e Sanjeevani)& Associate Director, Centre for
                Development of Advanced Computing (C-DAC), Mohali.
              </p>
              <div className={styles.info_icon} onClick={() => openModal(6)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
            <img src={sanjay} alt="speaker6" />
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.speaker} ${styles.speaker1}`}>
            <img src={murthy} alt="speaker7" />
            <div className={styles.body}>
              <h2>DR.MURTHY REMILLA</h2>
              <p>
                Head, Project Management, Human Spaceflight Group, Human Space
                Program of India, Gaganyaan ISRO
              </p>
              <div className={styles.info_icon} onClick={() => openModal(7)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className={`${styles.speaker} ${styles.speaker2}`}>
            <div className={styles.body}>
              <h2>ER.FAROOQ AHMAD WANI</h2>
              <p>
                State Nodal Officer (Telemedicine), Jammu and Kashmir
                Superintending Engineer
              </p>
              <div className={styles.info_icon} onClick={() => openModal(8)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
            <img src={farooq} alt="speaker8" />
          </div>
        </Fade>
        <Fade left>
          <div className={`${styles.speaker} ${styles.speaker1}`}>
            <img src={bijoy} alt="speaker9" />
            <div className={styles.body}>
              <h2>BIJOY M.G</h2>
              <p>
                Managing Director, Unarv Telemedicine and Healthcare services
                Executive Committee member, Telemedicine Society of India
              </p>
              <div className={styles.info_icon} onClick={() => openModal(9)}>
                <InfoOutlinedIcon />
                <p>More Info</p>
              </div>
            </div>
          </div>
        </Fade>
      </section>
      <section style={{ width: "100%" }}>
        <Slider />
      </section>
      <section className={styles.cta}>
        <Link to="/schedules">
          <button> Check Schedules </button>
        </Link>
      </section>
      <Modal
        open={modal}
        onClose={onCloseModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.modal}
        closeAfterTransition
      >
        <FadeIn in={modal}>
          <div className={styles.modal_container}>
            <img src={speaker.image} alt="speaker" />
            <section>
              <h2> {speaker.name} </h2>
              <p> {speaker.about} </p>
            </section>
            <section className={styles.schedule}>
              <h2> {speaker.date} </h2>
              <h3>
                {" "}
                Talk: {speaker.talkNum} ({speaker.time})
              </h3>
              <p>
                {" "}
                <b>Topic:</b> {speaker.topic}{" "}
              </p>
            </section>
          </div>
        </FadeIn>
      </Modal>
    </div>
  );
};

export default Home;
