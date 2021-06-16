import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Fade, Zoom } from "react-reveal";

import styles from "./Schedules.module.scss";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableContainer: {
    borderRadius: 10,
    margin: "0 auto",
    maxWidth: "95%",
  },
  tableHeaderCell: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    backgroundColor: "#115159",
    color: "#f2e8de",
  },
  tableColCell: {
    fontSize: "1.3rem",
  },
});

function createData(time, session, speaker) {
  return { time, session, speaker };
}

const firstDayRows = [
  createData("5:00pm to 5:25 pm", "Inaugural Function", ""),
  createData(
    "5:25 pm to 6:00 pm",
    "Technical Session 1",
    "Prof.(Dr) Mohanan Kunnummal"
  ),
  createData(
    "5:25 pm to 6:00 pm",
    "Technical Session 2",
    "Ms.Sudhamony S",
    24,
    6.0
  ),
];

const secondDayRows = [
  createData("6:00 pm to 7:30 pm", "Technical Session 3", "Dr.Prem Nair"),
  createData("7:30 pm to 8:30 pm", "Technical Session 4", "Mr.Vimal Wakhlu"),
];

const thirdDayRows = [
  createData("6:00 pm to 7:00 pm", "Technical Session 5", "Mr. Bijoy M.G"),
  createData("7:30 pm to 8:30 pm", "Technical Session 6", "Dr.Uma Nambiar"),
];

const fourthDayRows = [
  createData("11:00 am to 12:00 pm", "Technical Session 7", "Dr.Sanjay Sood"),
  createData(
    "6:00 pm to 7:00 pm",
    "Technical Session 8",
    "Mr.Farooq Ahmad Wani"
  ),
  createData(
    "7:30 pm to 8:30 pm",
    "Technical Session 9",
    "Mr.Murthy Remilla L N"
  ),
  createData("8:30 pm", "Valedictory Function", ""),
];

const Schedules = () => {
  const classes = useStyles();

  return (
    <div className={styles.container}>
      <header>
        <h1>Program Chart</h1>
      </header>
      <Fade left>
        <div className={styles.date}>DAY 1: 17 TH JUNE 2021 THURSDAY</div>
      </Fade>
      <Zoom bottom>
        <section>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Time
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Session
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Speaker
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {firstDayRows.map((row) => (
                  <TableRow key={row.speaker}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      className={classes.tableColCell}
                    >
                      {row.time}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.session}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.speaker}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Zoom>
      <Fade right>
        <div className={styles.date}>DAY 2: 18 TH JUNE 2021 FRIDAY</div>
      </Fade>
      <Zoom bottom>
        <section>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Time
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Session
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Speaker
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {secondDayRows.map((row) => (
                  <TableRow key={row.speaker}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      className={classes.tableColCell}
                    >
                      {row.time}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.session}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.speaker}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Zoom>
      <Fade left>
        <div className={styles.date}>DAY 3: 19 TH JUNE 2021 SATURDAY</div>
      </Fade>
      <Zoom bottom>
        <section>
          <TableContainer component={Paper} className={classes.tableContainer}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Time
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Session
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Speaker
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {thirdDayRows.map((row) => (
                  <TableRow key={row.speaker}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      className={classes.tableColCell}
                    >
                      {row.time}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.session}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.speaker}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Zoom>
      <Fade right>
        <div className={styles.date}>DAY 4: 20 TH JUNE 2021 SUNDAY</div>
      </Fade>
      <Zoom bottom>
        <section>
          <TableContainer
            component={Paper}
            className={classes.tableContainer}
            style={{ marginBottom: "2rem" }}
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Time
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Session
                  </TableCell>
                  <TableCell align="left" className={classes.tableHeaderCell}>
                    Speaker
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fourthDayRows.map((row) => (
                  <TableRow key={row.speaker}>
                    <TableCell
                      component="th"
                      scope="row"
                      align="left"
                      className={classes.tableColCell}
                    >
                      {row.time}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.session}
                    </TableCell>
                    <TableCell align="left" className={classes.tableColCell}>
                      {row.speaker}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </section>
      </Zoom>
    </div>
  );
};

export default Schedules;
