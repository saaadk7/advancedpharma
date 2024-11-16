// src/App.js
import styled from 'styled-components';
import mainImage from "./assets/pics (1).jpg"; 
import overlayImage from './assets/pics (2).jpg'; 

const OurTrust = () => {
  return (
    <Container>
      <Content>
        <Header>Welcome to Advance Pharma</Header>
        <Title>Bringing Comfort & to the <br /> Dentist Chair</Title>
        <Line />
        <Text>
          Exceptuer sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
        </Text>
        <List>
          <li> Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
          <li> Sed ut perspiciatis unde omnis iste natus error</li>
          <li> Totam rem aperiam, eaque ipsa quae ab illo inventore</li>
        </List>
        <Button>Explore more ➜</Button>
      </Content>
      <ImageContainer>
        <MainImage src={mainImage} alt="Main" />
        <OverlayImage src={overlayImage} alt="Overlay" />
      </ImageContainer>
    </Container>
  );
};

export default OurTrust;

// Styled Components


// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  align-items: center;
  justify-content: space-between;
  background-color: #3d4b70; /* Background color matching your image */
  padding: 120px;
  color: #ffffff;

  @media (max-width: 1024px) { /* Tablet */
    flex-direction: column;
    padding: 80px 40px;
    text-align: center;
  }

  @media (max-width: 768px) { /* Mobile */
    padding: 60px 20px;
  }
`;

const Content = styled.div`
  max-width: 40%;
  color: #ffffff;

  @media (max-width: 1024px) { /* Tablet */
    max-width: 100%;
  }
`;

const Header = styled.h5`
  color: #f5bd41;
  margin-bottom: 10px;
  font-family: "Poppins", serif;
  font-weight: 300;
`;

const Title = styled.h1`
  font-size: 2.5em;
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
  margin: 0;

  @media (max-width: 768px) { /* Mobile */
    font-size: 2em;
  }
`;

const Line = styled.div`
  width: 200px;
  height: 3px;
  background-color: #f5bd41;
  margin: 20px auto;

  @media (max-width: 1024px) { /* Tablet */
    margin: 20px auto;
  }
`;

const Text = styled.p`
  color: #d3d7e0;
  line-height: 1.9;
  font-family: "Poppins", serif;
  font-weight: 300;
`;

const List = styled.ul`
  color: #d3d7e0;
  list-style-type: none;
  padding: 0;

  li {
    margin: 8px 0;
    position: relative;
    padding-left: 20px;
    font-family: "Poppins", serif;
    font-weight: 300;

    &:before {
      content: '•';
      color: #f5bd41;
      position: absolute;
      left: 0;
    }
  }
`;

const Button = styled.button`
  background-color: #00008B;
  color: #fff;
  padding: 10px 40px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 1em;

  @media (max-width: 768px) { /* Mobile */
    padding: 10px 30px;
    font-size: 0.9em;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 50%;

  @media (max-width: 1024px) { /* Tablet */
    width: 80%;
    margin-top: 30px;
  }

  @media (max-width: 768px) { /* Mobile */
    width: 100%;
  }
`;

const MainImage = styled.img`
  width: 70%;
  height: 450px;
  margin-left: 30%;
  border: 2px solid white;
  box-shadow: 0 6px 10px 1px rgba(0, 0, 0, 1);
  border-radius: 30px 0px 6px 6px;

  @media (max-width: 1024px) { /* Tablet */
    width: 90%;
    margin-left: 5%;
    height: auto;
  }

  @media (max-width: 768px) { /* Mobile */
    width: 100%;
    margin-left: 0;
    height: auto;
  }
`;

const OverlayImage = styled.img`
  position: absolute;
  bottom: 50px;
  left: 17%;
  width: 30%;
  height: 40%;
  border-radius: 30px 0px 6px 6px;
  box-shadow: 0 6px 10px 1px rgba(0, 0, 0, 1);
  border: 2px solid white;

  @media (max-width: 1024px) { /* Tablet */
    width: 50%;
    height: auto;
    bottom: 20px;
    left: 25%;
  }

  @media (max-width: 768px) { /* Mobile */
    width: 60%;
    height: auto;
    bottom: -20px;
    left: 20%;
  }
`;
