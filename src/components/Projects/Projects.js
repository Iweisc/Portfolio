import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jobit from "../../Assets/Projects/jobit.png"
import healthai from "../../Assets/Projects/healthai.png"
import todoapp from "../../Assets/Projects/todoapp.png"
import codeEditor from "../../Assets/Projects/codeEditor.png"
import blog from "../../Assets/Projects/blog.png"
import tripguide from "../../Assets/Projects/tripguide.png"
import emotion from "../../Assets/Projects/emotion.png"
import chromix from "../../Assets/Projects/chromix.png"
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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chromix}
              isBlog={false}
              title="Chromix"
              description="Chromix is a open-source operating system which repurposes old hardware to browse modern web"
              ghLink="https://github.com/coderzawad/chromix"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeEditor}
              isBlog={false}
              title="LLM Hardware Calculator"
              description="A JavaScript tool that calculates hardware requirements for running Large Language Models. Helps users determine the necessary computational resources based on model size, quantization, and other parameters."
              ghLink="https://github.com/Iweisc/LLM-hardware-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Algebra Calculator"
              description="An interactive JavaScript application that solves algebraic equations and expressions. Features a clean interface for users to input mathematical problems and receive step-by-step solutions."
              ghLink="https://github.com/Iweisc/algebra-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tripguide}
              isBlog={false}
              title="Chess Players Elo Progression Chart"
              description="Python-based visualization tool that tracks and charts chess players' Elo rating progression over time. Provides insightful analytics on player improvement and performance trends."
              ghLink="https://github.com/Iweisc/Chess-Players-Elo-Progression-Chart"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Snake Game AI Simulation"
              description="A Python implementation of the classic Snake game featuring five different AI algorithms competing simultaneously. Visualizes different AI strategies and learning approaches in an entertaining simulation."
              ghLink="https://github.com/Iweisc/Snake-Game-5-Ai-s-SIM"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
