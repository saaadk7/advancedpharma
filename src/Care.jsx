// src/ExceptionalCare.js
import styled from 'styled-components';
import { FaTooth, FaHandsHelping, FaUserMd } from 'react-icons/fa'; 

import mainImage from './assets/pics (3).jpg'; 
import overlayImage from './assets/pics (4).jpg'; 

const ExceptionalCare = () => {
  return (
    <Container>
      <ImageContainer>
        <MainImage src={mainImage} alt="Main" />
        <OverlayImageContainer>
          <OverlayImage src={overlayImage} alt="Overlay" />
        </OverlayImageContainer>
      </ImageContainer>
      <Content>
        <SmallTitle>Why Choose Us?</SmallTitle>
        <Title>Changing Lives Through Exceptional Quality medicines</Title>
        <Line />
        <List>
          <ListItem>
            <IconWrapper>
              <FaTooth />
            </IconWrapper>
            <TextWrapper>
              <ItemTitle>Cutting Edge Technology</ItemTitle>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Description>
            </TextWrapper>
          </ListItem>
          <ListItem>
            <IconWrapper>
              <FaHandsHelping />
            </IconWrapper>
            <TextWrapper>
              <ItemTitle>Thorough Approach</ItemTitle>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Description>
            </TextWrapper>
          </ListItem>
          <ListItem>
            <IconWrapper>
              <FaUserMd />
            </IconWrapper>
            <TextWrapper>
              <ItemTitle>Personalised Care</ItemTitle>
              <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Description>
            </TextWrapper>
          </ListItem>
        </List>
        <ActionButton>Explore more ➜</ActionButton>
      </Content>
    </Container>
  );
};

export default ExceptionalCare;

// Styled Components
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 120px;
  height: 100vh;
  background-color: #f9f4ed;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 20px;
    height: auto;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 45%;

  @media (max-width: 1024px) {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

const MainImage = styled.img`
  width: 80%;
  height: 450px;
  border-radius: 10px;
  background-size: cover;

  @media (max-width: 768px) {
    width: 90%;
    height: auto;
  }
`;

const OverlayImageContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 61%;
  width: 150px;
  height: 150px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;


const OverlayImage = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 50%;
`;

const Content = styled.div`
  width: 40%;

  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
  }
`;

const SmallTitle = styled.h5`
  color: #f5bd41;
  font-weight: 600;
  margin-bottom: 8px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 2em;
  color: #000;
  margin: 0;
  font-family: "Poppins", serif;
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 1.8em;
  }
`;

const Line = styled.div`
  width: 190px;
  height: 3px;
  background-color: #f5bd41;
  margin: 20px auto;

  @media (max-width: 1024px) {
    margin: 20px auto;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    justify-content: center;
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5em;
  color: #f5bd41;
  margin-right: 15px;

  @media (max-width: 1024px) {
    margin-right: 10px;
  }
`;

const TextWrapper = styled.div`
  text-align: left;

  @media (max-width: 1024px) {
    text-align: center;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.1em;
  color: #000;
  margin: 0 0 5px 0;
  font-family: "Poppins", serif;
  font-weight: 400;
`;

const Description = styled.p`
  font-size: 0.9em;
  color: #6c757d;
  margin: 0;
`;

const ActionButton = styled.button`
  background-color: #003161;
  color: #ffffff;
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  font-size: 1em;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #006a67;
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;
