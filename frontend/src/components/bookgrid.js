import React from "react";
import styled from "styled-components";
import BookTile from "./booktile";

const Container = styled.div`
  padding: 0 5px;
  // border: 1px solid white;
  // background-color: rgba(255, 255, 255, 0.1);
  width: 80%;
  display:flex;
  flex-wrap: wrap;
`;

const BookGrid = () => {
  return (
    <Container>
      <BookTile />
      <BookTile />
      <BookTile />
      <BookTile />
      <BookTile />
      <BookTile />
    </Container>
  );
};

export default BookGrid;
