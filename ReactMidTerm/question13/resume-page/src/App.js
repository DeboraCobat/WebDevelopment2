import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./App.css";

const ResumePage = () => {
  return (
    <div className="resume-container">
      <Container>
        <Row>
          <Col>
            <h1>Debora Bastos</h1>
            <p>321 Main Street</p>
            <p>Montreal, QC H3E 1G3</p>
            <p>555-555-5555</p>
            <p>linkedin.com/in/debora-bastos</p>
            <p>github.com/DeboraCobat</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Summary</h2>
            <p>
              Full-Stack Development Student | Passionate about Creating
              Visually Engaging Websites and Applications with HTML, CSS, and
              JavaScript
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Experience</h2>
            <h3>Full-Stack Development Student</h3>
            <p>John Abbott College - 2022/2023</p>
            <p>
              I'm a full-stack development student passionate about creating
              user-friendly websites and applications. I'm constantly learning
              front-end technologies like HTML, CSS, and JavaScript, as well as
              staying up-to-date on industry trends. I have a strong
              understanding of responsive design, cross-browser compatibility,
              and web accessibility. I completed an online UX certificate
              program to gain a deep understanding of user-centered design
              principles. I'm motivated to join a team that shares my passion
              for innovative solutions that improve user experiences and eager
              to connect with like-minded professionals to advance my career.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h2>Education</h2>
            <h3>Full-Stack Development Student</h3>
            <p>John Abbott College | Saint-Anne de Bellevue, QC - 2022/2023</p>
            <h3>User Experience Design Certificate</h3>
            <p>Alura Online Tech Platform - 2020</p>
            <h3>Leadership and Management Post-Graduation</h3>
            <p>
              Manitoba Institute of Trades and Technology | Winnipeg, MB - 2017
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ResumePage;
