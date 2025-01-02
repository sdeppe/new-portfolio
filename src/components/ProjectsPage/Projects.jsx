import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/img/images.jpeg";
import projImg2 from "../../assets/img/AqualiticalVisualsDemo.gif";
import projImg3 from "../../assets/img/campusBuddy.gif";
import projImg4 from "../../assets/img/parsetagram_resized.gif";
import projImg5 from "../../assets/img/yardSale.gif";
import projImg6 from "../../assets/img/twitter.gif";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import './Projects.css';

export const Projects = () => {

  const projects = [
    {
      title: "OCR-Based Grading Assistant",
      description: "Coming soon.",
      imgUrl: projImg1,
    },
    {
      title: "AquaLitical Visuals",
      description: "Vue.js App that allows the user to correct guesses on fish species made by a machine learning algoritm.",
      imgUrl: projImg2,
    },
    {
      title: "Campus Buddy",
      description: "A weather forecasting app using React and OpenWeather API.",
      imgUrl: projImg3,
    },
    {
      title: "Parsetagram",
      description: "Android Instagram clone that uses a Parse database to manage user credentials and posts.",
      imgUrl: projImg4,
    },
    {
      title: "Yard Sale App",
      description: "Mock Android app that allows users to buy items from other users and post their own items to sell. Uses a parse database.",
      imgUrl: projImg5,
    },
    {
      title: "Twitter Clone",
      description: "iOS app that allows a user to log into Twitter and see their feed as well as post to it using Twitter API.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
