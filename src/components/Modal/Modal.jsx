import React, { useState, useEffect } from "react";
import { Modal, Fade } from "@material-ui/core";

import styles from "./Modal.module.css";

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

const Modal = ({ id, modal, onCloseModal }) => {
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

  useEffect(() => {
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
  }, []);

  const onCloseHandler = () => {
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
    onCloseModal();
  };

  return (
    <Modal
      open={modal}
      onClose={onCloseHandler}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      className={styles.modal}
      closeAfterTransition
    >
      <Fade in={modal}>
        <div className={styles.modal_container}>
          <img src={speaker.image} alt="speaker" />
          <section>
            <h2> {speaker.name} </h2>
            <p> {speaker.about} </p>
          </section>
          <section className={styles.schedule}>
            <h2> {speaker.date} </h2>
            <h3>
              Talk: {speaker.talkNum} ({speaker.time})
            </h3>
            <p>
              <b>Topic:</b> {speaker.topic}
            </p>
          </section>
        </div>
      </Fade>
    </Modal>
  );
};

export default Modal;
