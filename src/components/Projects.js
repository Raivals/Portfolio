import { Col, Container, Nav, Row, Tab } from 'react-bootstrap'
import { ProjectCard } from './ProjectCards'
import colorSharp2 from '../assets/img/color-sharp2.png'
import projectImg1 from '../assets/img/projectImg1.png'
import projectImg2 from '../assets/img/projectImg2.png'
import projectImg3 from '../assets/img/projectImg3.png'
import projectImg4 from '../assets/img/projectImg4.png'
import projectImg5 from '../assets/img/projectImg5.png'
import projectImg6 from '../assets/img/projectImg6.png'
import projectImg7 from '../assets/img/projectImg7.png'
import projectImg8 from '../assets/img/projectImg8.png'
import projectImg9 from '../assets/img/projectImg9.png'
import projectImg10 from '../assets/img/projectImg10.png'

export const Projects = () => {
    const projects = [
        {
            title: 'Booki',
            description: 'Turn a mockup into a website with HTML & CSS',
            imgUrl: projectImg1,
        },
        {
            title: 'Ohmyfood',
            description: 'Liven up a web page with CSS animations',
            imgUrl: projectImg2,
        },
        {
            title: 'La panthère agence',
            description: 'Optimize an existing website',
            imgUrl: projectImg3,
        },
        {
            title: 'Kanap',
            description: 'Build an e-commerce site in JavaScript',
            imgUrl: projectImg4,
        },
        {
            title: 'Piiquante',
            description: 'Build a secure API for a food review app',
            imgUrl: projectImg5,
        },
        {
            title: 'Groupomania',
            description: 'Create a corporate social network.',
            imgUrl: projectImg6,
        },
        {
            title: 'Timeline',
            description: 'Create a dynamic timeline of classical musicians .',
            imgUrl: projectImg7,
        },
        {
            title: 'Music-Player',
            description: 'Create a Music-player with TypeScript.',
            imgUrl: projectImg8,
        },
        {
            title: 'Meteo-app',
            description: 'Meteo App designed with React & CSS Tailwind',
            imgUrl: projectImg9,
        },
        {
            title: 'Pokedex',
            description: 'Pokédex designed with React TypeScript & Poké API',
            imgUrl: projectImg10,
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>
                            Here are my projects. If you want to see more about
                            them, you can check my Github
                            <a href="https://github.com/Raivals"> here !</a>
                        </p>
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                            ></Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })}
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-right"
                src={colorSharp2}
                alt="background img right"
            />
        </section>
    )
}
