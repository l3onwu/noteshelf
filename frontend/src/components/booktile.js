import React from "react";
import styled from "styled-components";

const Container = styled.div`
  // border: 1px solid white;
  padding: 15px;
  width: 150px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
  }
`;

//Find alternative to aspect-ratio, not supported in Safari
const Cover = styled.div`
  img {
    width: 100%;
    aspect-ratio: 1/1.6;
    object-fit: cover;
    box-shadow: 3px 5px 4px 1px rgba(0, 0, 0, 0.4);
    border-radius: 5px;
  }
  margin: 0 0 10px 0;
`;

const Description = styled.div`
  // border: 1px solid white;
  h3 {
    margin: 0 0 4px 0;
    font-size: 13px;
  }
  p {
    margin: 0px;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.75);
  }
`;

//Book Tile with dummy data passed as props
const BookTile = ({ title, author, image }) => {
  return (
    <Container>
      <Cover>
        <img src={image}></img>
      </Cover>
      <Description>
        <h3>{title}</h3>
        <p>{author}</p>
      </Description>
    </Container>
  );
};

export default BookTile;
