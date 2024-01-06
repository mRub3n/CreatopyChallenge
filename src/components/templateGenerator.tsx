import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function TemplateGenerator(props) {
  interface CardProps {
    children: ReactNode;
    title?: string;
    templateLink?: string;
    color?: string;
    imageUrl?: string;
    onClick: () => void;
  }

  const Card = (props: CardProps) => {
    return (
      <CardWrapper {...props}>
        <StyledLink to={'/InstagramPostTemplate'}>
          <CardTitle>{props.title}</CardTitle>
          {props.children}

          <StyledIMG alt="" src={props.imageUrl} />
        </StyledLink>
      </CardWrapper>
    );
  };

  return (
    <Container>
      <Header>Choose Template</Header>
      <CardsWrapper>
        {cards.map((card, index) => {
          return (
            <Card
              key={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              onClick={() => props.createTemplateFunction(cards[index])}
            >
              {card.text}
            </Card>
          );
        })}
      </CardsWrapper>
    </Container>
  );
}

const cards = [
  {
    id: 1,
    title: 'Twitter Header',
    text: '1500 x 500px',
    imageUrl:
      'https://dge4uaysoh8oy.cloudfront.net/resize/banners/b7t90kchb/medium-large',
    emptyImage:
      'https://github.com/mRub3n/Test/blob/main/Untitled%20design-High-Quality%20(2).jpg?raw=true',
  },
  {
    id: 2,
    title: 'Instagram Post',
    text: '500 x 500px',
    imageUrl:
      'https://dge4uaysoh8oy.cloudfront.net/resize/banners/bhisb55ih/medium',
    emptyImage:
      'https://github.com/mRub3n/html-portofolio/blob/main/emptyInstagramPost.jpg?raw=true',
  },
  {
    id: 3,
    title: 'Story',
    text: '1080 x 1920px',
    imageUrl:
      'https://dge4uaysoh8oy.cloudfront.net/resize/banners/bcmao83jz/medium',
    emptyImage:
      'https://github.com/mRub3n/Test/blob/main/Untitled%20design-High-Quality.jpg?raw=true',
  },
];

const StyledIMG = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
 `;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Header = styled.h1`
  font-size: 40px;
`;

const Container = styled.div`
flex-direction: column;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 30px;
  align-items: center;
  color: #000;
`;

const CardWrapper = styled.div<{ templateLink?: string }>`
  
  text-align: center;
  font-family: sans-serif;
  background-color: white;
  box-shadow: 1px 1px 10px #66666660;
  border-radius: 5px;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 1px 1px 10px #66666680;
    transform: translateY(-1px) translateX(1px);
    transition: all 0.2s;
  }
`;

const CardTitle = styled.h2`
  text-align: center;
  color: #333;
  margin: 0;
  font-size: 20px;
`;

const CardsWrapper = styled.div`
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export default TemplateGenerator;
