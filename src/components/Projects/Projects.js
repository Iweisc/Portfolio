import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobit from "../../Assets/Projects/jobit.png"
import healthai from "../../Assets/Projects/healthai.png"
import qrcodeapp from "../../Assets/Projects/qrcodeapp.png"
import todoapp from "../../Assets/Projects/todoapp.png"
import noteapp from "../../Assets/Projects/notesapp.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobit}
              isBlog={false}
              title="Shopify Bundles App"
              description="Boost sales and customer satisfaction with this Shopify app, designed to let merchants create and sell customizable product bundles at discounted prices. Easily define bundle rules, set dynamic pricing, and offer attractive deals to increase average order."
              ghLink="https://github.com/coderzawad/Shopify-bundles-App-Remake-2-"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapp}
              isBlog={false}
              title="Todo app"
              description="Its a todo app which is differs from other in many ways. i am pretty sure it is the best todo app project available over there"
              ghLink="https://github.com/coderzawad/Todo-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={healthai}
              isBlog={false}
              title="Health Tracker"
              description="Health tracker is one of the best FITNESS trackers. You can track ur weekly activity it will give you a score based on your sleep duration. It can track your nutritions but keep in mind that the app is still in early development so expect bugs"
              ghLink="https://github.com/coderzawad/HealthAI"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noteapp}
              isBlog={false}
              title="Note App"
              description="Its an app that you can use to take notes. You can upload image do your stuff and it will do the job. I would go as far as to say it is better than 99% of the apps since it stores ur data at ur local machine and its open source"
              ghLink="https://github.com/coderzawad/Note-App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
