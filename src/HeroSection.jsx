import styled from 'styled-components';
import mainImage from './assets/pic2.jpg'; 
import overlayImage from './assets/pic1.jpg'; 
const HeroSection = () => {
  return (
    <HeroContainer>
      <TextContent>
        <Subtitle>Welcome to Advance Pharma </Subtitle>
        <Title>Where Everyone <br /> Walks Out with a <br /> Great Smile</Title>
        <Space />
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore.
        </Description>
        <ServiceSelector>
          <select>
            <option>Select a Service</option>
            {/* Additional options */}
          </select>
          <BookButton>Book an Appointment ➜</BookButton>
        </ServiceSelector>
      </TextContent>
      <ImageWrapper>
        <BackgroundShape />
        <MainImage src={mainImage} alt="Main Hero" />
        <OverlayImage src={overlayImage} alt="Overlay" />
      </ImageWrapper>
    </HeroContainer>
  );
};

export default HeroSection;

// Styled Components

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
  height: 80vh;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const TextContent = styled.div`
  flex: 1;
  padding: 4rem;
  width: 30%;

  @media (max-width: 868px) {
    width: 100%;
    padding: 2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 0.6rem;
  color: #7b3f00;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 0.5rem;

  @media (max-width: 868px) {
    font-size: 0.7rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #000B58;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
  color: #000;
  font-weight: 100;

  @media (max-width: 868px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Space = styled.div`
  width: 220px;
  height: 3px;
  background-color: #7b3f00;
  margin: 20px 0;

  @media (max-width: 868px) {
    width: 150px;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  color: #333;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ServiceSelector = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  width: 70%;
  height: 50px;
  border-radius: 14px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  select,
  button {
    padding: 1rem;
    font-size: 0.85rem;
    margin: 0.5rem 0;
    border-radius: 14px;
    border: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    box-shadow: none;
    
    select {
      margin-right: 1rem;
      
      }
      }
      
      @media (max-width: 868px) {
        width: 100%;
        box-shadow: none;
  }
`;

const BookButton = styled.button`
  background-color: #003161;
  color: white;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 0.8rem;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  top: 10%;
  right: -10%;
  width: 300px;
  height: 300px;
  background-color: #FFF4B7;
  border-radius: 50%;
  clip-path: polygon(0% 0%, 100% 0%, 75% 100%, 0% 75%);
  z-index: -1;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
    top: 20%;
    right: -5%;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const MainImage = styled.img`
  width: 500px;
  height: 400px;
  border-radius: 30%;
  background-size: cover;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    height: 240px;
  }
`;

const OverlayImage = styled.img`
  position: absolute;
  top: 10%;
  width: 200px;
  height: 200px;
  border-radius: 30%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    top: 20%;
    right: 10px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 100px;
    top: 40%;
    left: -2%;
  }
`;
