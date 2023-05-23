import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Header, Segment, Image, Button, Icon } from "semantic-ui-react";

export default function HomePage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/events");
  }
  return (
    <Segment inverted textAlign="center" vertical className="masthead">
      <Container>
        <Header as='h1' inverted>
          <Image size='massive' src='/assets/logo.png' style={{marginBottom : 12}}/>
          Re-vents
        </Header>
        <Button size='huge' inverted onClick={handleClick}>  
          Get Started
          <Icon name='right arrow' inverted/>
        </Button>
      </Container>
    </Segment>
  )
}
