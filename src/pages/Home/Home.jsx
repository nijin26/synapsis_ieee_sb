import React, { useState } from "react";
import { Button, Modal } from "@material-ui/core";

//image
import Poster from "../../assets/synapsis_poster.jpg";
import Speakers from "../../assets/speakers_list.jpg";

//styles
import styles from "./Home.module.css";

//Components

const Home = () => {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.container}>
      <img src={Poster} alt="poster" className={styles.poster} />
      <img src={Speakers} alt="poster" className={styles.poster} />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "10px" }}
        onClick={() => setModal(true)}
      >
        Register Now
      </Button>
      <Modal
        open={modal}
        onClose={() => setModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={styles.modal}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc9YVyQ62FFbhu6h9BKlrOmDp3SUBEl8VuP6jfYF-CRFYzqug/viewform?embedded=true"
          title="Synapsis"
          width="700"
          height="520"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </Modal>
      ;
    </div>
  );
};

export default Home;
