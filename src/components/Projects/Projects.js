import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import parultravels from "../../Assets/Projects/Parul-travel.png";
import Renewo from "../../Assets/Projects/Renewo.png";
import shiksha from "../../Assets/Projects/connect-shiksha.png";
import githubuser from "../../Assets/Projects/Githubuser.png";
import dribble from "../../Assets/Projects/Dribble-clone.png";
import vibezdance from "../../Assets/Projects/Vibezdance.png";

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
              imgPath={parultravels}
              isBlog={false}
              title="Purulia Travels"
              description="Purulia Travels is a web project designed to simplify travel planning and booking. It features user-friendly interfaces for browsing destinations, booking services, and checking itineraries. The platform integrates with various payment gateways, offering secure transactions and personalized recommendations for travelers."
              ghLink="https://github.com/Chandu7a7/Parull-Travel.git"
              demoLink="https://puruliatravelsfinal.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shiksha}
              isBlog={false}
              title="Connect-shiksha"
              description="The Connect Shiksha Website is an educational platform developed using the MERN stack. It connects students, educators, and institutions by offering resources, guidance, and information to support learning and development. The platform is user-friendly, dynamic, and scalable."
              ghLink="https://github.com/Chandu7a7/connect-shiksha-intar.git"
              demoLink="https://connect-shiksha-intar.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Renewo}
              isBlog={false}
              title="Renewo"
              description="Renewo is a web application built with Django, designed to streamline e-waste management. It connects users with e-waste collection services, offering features like request pickups, tracking disposal status, and accessing eco-friendly disposal information, all in a user-friendly interface."
              ghLink="https://github.com/Chandu7a7/Renewo.git"
              demoLink="https://renewo.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dribble}
              isBlog={false}
              title="Dribble-clone"
              description="Dribbble clone website built with HTML, Tailwind CSS, and JavaScript. Showcases a sleek, responsive design, enabling users to browse, upload, and showcase creative projects with an interactive UI."
              ghLink="https://github.com/Chandu7a7/dribble-clone.git"
              demoLink="https://dribble-clone-gules.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={githubuser}
              isBlog={false}
              title="GitHub user search"
              description="Built a GitHub User Profile Search app using React.js, useEffect, and Axios. The app lets users search for GitHub profiles, displaying data such as repositories, followers, and activity in a clean UI."
              ghLink="https://github.com/Chandu7a7/React-js.git"
              demoLink="https://githubuserprofile.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vibezdance}
              isBlog={false}
              title="Vibez Dance"
              description="Vibez Dance is a vibrant, responsive dance academy website built with Tailwind CSS and JavaScript. It features class schedules, instructor bios, gallery, testimonials, and an easy-to-use registration form, offering a seamless user experience and bold design to engage dance enthusiasts."
              ghLink="https://github.com/Chandu7a7/vibezdance.git"
              demoLink="https://dancevibez.netlify.app/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
