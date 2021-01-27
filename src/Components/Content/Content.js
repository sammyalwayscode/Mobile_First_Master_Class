import React from 'react'
import { Container, ContentWrapper, Description, Contents, ImageBox, TextBox } from './ContentStyle'
import pix from '../Img/Mr Indidi Flyer No 111.jpg'

function Content() {
  return (
    <Container>
      <ContentWrapper>
        <Description>
          <h1>Deccription</h1>
        </Description>
        <Contents>
          <ImageBox>
            <img src={pix} alt="" style={{ height: "350px", width: "350px", objectFit: "cover" }} />
          </ImageBox>
          <TextBox>
            <h1>What is GitHub?</h1>
            <p>GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

This tutorial teaches you GitHub essentials like repositories, branches, commits, and Pull Requests. You’ll create your own Hello World repository and learn GitHub’s Pull Request workflow, a popular way to create and review code.</p>
          </TextBox>
        </Contents>
      </ContentWrapper>
    </Container>
  )
}

export default Content
