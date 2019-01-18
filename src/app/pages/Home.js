// Home.js
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router';

// Import Button component
import Button from '../components/Button'

// Import Container component
import Container from '../components/Container'

// Import Section component
import Section from '../components/Section'

// Import typography components
import { Heading, Subheading } from '../components/Typography'

const HomeWrapper = styled(Section)`
  background-image: url('https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/a/10327/files/2015/02/wpdevshed-portfolio-wjoq3m.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media (min-width: 480px) {
    background-image: url('https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/a/10327/files/2015/02/wpdevshed-portfolio-wjoq3m.jpg');
  }

  @media (min-width: 768px) {
    background-image: url('https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/a/10327/files/2015/02/wpdevshed-portfolio-wjoq3m.jpg');
  }

  @media (min-width: 1280px) {
    background-image: url('https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/a/10327/files/2015/02/wpdevshed-portfolio-wjoq3m.jpg');
  }

  @media (min-width: 1600px) {
    background-image: url('https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/a/10327/files/2015/02/wpdevshed-portfolio-wjoq3m.jpg');
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
  }

  ${Container} {
    color: #fff;
  }

  ${Subheading} {
    margin-bottom: 32px;
  }
`

// Using Button component but changing the element to 'a'
const HomeButton = Button.withComponent('a')

export default class Home extends React.Component {
  render () {
    return (
      <HomeWrapper centered>
        <Container>
          <Heading>Tanner Barnum</Heading>

          <Subheading>Developer</Subheading>

          <HomeButton href="/portfolio">My work</HomeButton>
        </Container>
      </HomeWrapper>
    )
  }
}
