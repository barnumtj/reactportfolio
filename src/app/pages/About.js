// About.js
import React from 'react'
import styled from 'styled-components'

// Import Container component
import Container from '../components/Container'

// Import Link component
import Link from '../components/Link'

// Import Section component
import Section from '../components/Section'

// Import typography components
import { Heading, Subheading, Text } from '../components/Typography'

export default class About extends React.Component {
  render() {
    return (
      <Section centered>
        <Container>
          <Subheading>Tanner Barnum</Subheading>

          <Heading>About Me</Heading>

          <Text>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</Text>

          <a href="mailto:email@example.com">email@example.com</a>
        </Container>
      </Section>
    )
  }
}
