import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <LandingPageContainer>
      <Heading>Custom Banner Generator</Heading>
      <h1>Design Set Templates</h1>

      <Button>
        <Link to="/templateGenerator">
          <h4>Get Started</h4>
        </Link>
      </Button>
    </LandingPageContainer>
  );
};

export default LandingPage;



const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;

const Heading = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Button = styled.p`
padding: 0;
  background-color: #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #2E3138;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  a {
    text-decoration: none;
    color: #2E3138;
  }

  &:hover {
    a {
      text-decoration: none;
      color: #f9f9f9;
    }
    color: rgb(0, 0, 0);
    background-color: #2E3138;
    color: #000;
    border-color: transparent;
  }
`;
