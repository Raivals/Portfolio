import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../assets/img/header-img.svg'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ['Web Developer']
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
        // eslint-disable-next-line
    }, [text, delta])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2)
        }

        if (isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>
                            {"Hi I'm Romain, "}
                            <span className="wrap">{text}</span>
                        </h1>
                        <p>
                            Recently gratuate from a web developement formation,
                            I learned to develop with real situations projects.
                            I Mainly work with html5 / css (scss) / React.
                        </p>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
