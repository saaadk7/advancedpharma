// src/App.js
import styled, { keyframes } from 'styled-components';
import { FaTooth, FaMoneyCheckAlt, FaUserFriends, FaLaptopMedical } from 'react-icons/fa';

const Experience = () => {
  return (
    <Container>
      <Header>What Makes Us Different</Header>
      <Title>Experience Our Unique Approach</Title>
      <Line />
      <CardContainer>
        <Card>
          <IconWrapper>
            <FaTooth />
          </IconWrapper>
          <CardTitle>Proactive Prevention</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        </Card>
        <Card>
          <IconWrapper>
            <FaMoneyCheckAlt />
          </IconWrapper>
          <CardTitle>Payment Plans</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</Description>
        </Card>
        <Card>
          <IconWrapper>
            <FaUserFriends />
          </IconWrapper>
          <CardTitle>Welcoming New Patients</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        </Card>
        <Card>
          <IconWrapper>
            <FaLaptopMedical />
          </IconWrapper>
          <CardTitle>30+ Combined Years Experience</CardTitle>
          <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Description>
        </Card>
      </CardContainer>
      <ActionButton>Explore more ➜</ActionButton>
    </Container>
  );
};

export default Experience;

// Styled Components
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f9f4ed;
  color: #3d4b70;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Header = styled.h5`
  color: #f5bd41;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 8px;
  text-transform: uppercase;
  animation: ${fadeIn} 1s ease;
`;

const Title = styled.h2`
  font-size: 2em;
  margin: 0;
  color: #3d4b70;
  animation: ${fadeIn} 1.2s ease;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Line = styled.div`
  width: 60px;
  height: 3px;
  background-color: #f5bd41;
  margin: 20px auto;
  animation: ${fadeIn} 1.4s ease;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 30px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

const Card = styled.div`
  background-color: #ffffff;
  width: 260px;
  height: 250px;
  padding: 30px 10px;
  margin: 0 10px 18px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: ${fadeIn} 1s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    width: 40%; /* Take up most of the screen on smaller devices */
    height: 200px;
  }
  @media (max-width: 500px) {
    width: 80%; /* Take up most of the screen on smaller devices */
    height: 200px;
  }
`;

const IconWrapper = styled.div`
  font-size: 3.6em;
  color: #f5bd41;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 3em; /* Slightly smaller icons for tablets and mobile */
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2em;
  color: #3d4b70;
  font-weight: 600;
  margin: 10px 0;

  @media (max-width: 768px) {
    font-size: 1.1em; /* Slightly smaller title for smaller devices */
  }
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #6c757d;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.85em; /* Smaller description text for smaller devices */
  }
`;

const ActionButton = styled.button`
  background-color: #003161;
  color: #ffffff;
  padding: 13px 30px;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
  animation: ${fadeIn} 1.6s ease;

  &:hover {
    background-color: #006a67;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 0.9em; /* Smaller button size for smaller devices */
  }
`;
