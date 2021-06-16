import React from "react";
import styles from "./AboutUs.module.css";
import Grid from "@material-ui/core/Grid";

import { Fade } from "react-reveal";

const AboutUs = () => {
  return (
    <div>
      <div className={styles.hero_section}>
        <div>
          <Fade left>
            <p className={styles.hero_main}>Genesis of Synapsis</p>
          </Fade>
          <Fade right>
            <p className={styles.hero_sub}>On it’s way to building a legacy</p>
          </Fade>
        </div>
      </div>
      <div className={styles.body_container}>
        <div className={styles.main_container}>
          <Grid container direction="row" justify="center" alignItems="center">
            <div className={styles.content_box}>
              Synapsis is organized as a collaborative venture of IEEE EMBS SBC,
              and BLAZE of TKMIT. BLAZE (Biomedical League For Advancement to
              Zenith Excellent) was launched in the year 2009 with its objective
              of exploring possibilities in technology interlinked with the
              medical field. As a part of this initiative, we launched a
              nationally aimed event called ‘SYNAPSIS’ in the year 2013, for the
              acknowledgement of technological enhancements in healthcare
              sectors, with a 3-day event that involved seminar sessions with
              professionals. It also included a very productive session for the
              healthcare industry: ‘A free medical equipment maintenance camp’.
              This was followed by the next year with a two-day event of
              Synapsis '14.
              <br></br>
              <br></br>
              This national event disappointingly went through a break for the
              next few years.
              <br></br>
              <br></br>
              However, when in struggles of covid pandemic arose the team
              managed to come up with yet another most successful national event
              Synapsis ’20 which was a 4-day event that involved great webinar
              sessions with highly professional speakers and involved
              participants all around the nation who luckily got to seek a lot
              of knowledge from these informative sessions.
              <br></br>
              <br></br>
              Apart from Synapsis, the BLAZE organization is very vibrant and it
              includes a very enthusiastic team behind it encouraged by the best
              of best teachers and seniors. The blood donation camp that often
              takes place has helped a lot socially as well. During the flood
              that proved to be a trouble to the state, we stood up to help the
              people by coming up with Flood relief activities.
              <br></br>
              <br></br>
              Also exclusively for the students of TKMIT there even was a
              medical expo conducted in the year 2020, where we were taught
              about the medical equipment by none other than our seniors and
              faculties.
              <br></br>
              <br></br>
              Now, this year, we are coming forward with yet another major
              event, '21 focusing on telemedicine and e-health. It includes a
              four-day webinar session from 17th to 20th June 2021 in which
              there will be a lot of prominent speakers and many informative
              sessions by them. Unfailingly, this year too this event is going
              to make its mark on everyone. Stay tuned for this exciting event
              and be a part of this legacy
            </div>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
