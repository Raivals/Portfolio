import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import colorSharp from '../assets/img/color-sharp.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    }

    return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <Carousel
                                responsive={responsive}
                                infinite={true}
                                className="skills-slider"
                            >
                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div class="mask full">
                                                <div class="fill"></div>
                                            </div>
                                            <div class="inside-circle">
                                                {' '}
                                                90%{' '}
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Autonomy</h5>
                                </div>
                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div class="mask full-1">
                                                <div class="fill"></div>
                                            </div>
                                            <div class="inside-circle">
                                                {' '}
                                                70%{' '}
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div class="mask full-2">
                                                <div class="fill"></div>
                                            </div>
                                            <div class="inside-circle">
                                                {' '}
                                                80%{' '}
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Management</h5>
                                </div>
                                <div className="item">
                                    <div className="circle-wrap">
                                        <div className="circle">
                                            <div className="mask half">
                                                <div className="fill"></div>
                                            </div>
                                            <div class="mask full">
                                                <div class="fill"></div>
                                            </div>
                                            <div class="inside-circle">
                                                {' '}
                                                90%{' '}
                                            </div>
                                        </div>
                                    </div>
                                    <h5>Teamwork</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-left"
                src={colorSharp}
                alt="colorSharp"
            />
        </section>
    )
}
