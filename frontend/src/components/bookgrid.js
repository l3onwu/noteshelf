import React from "react";
import styled from "styled-components";
import BookTile from "./booktile";

const Container = styled.div`
  padding: 0 5px;
  // border: 1px solid white;
  width: 600px;
  height: 600px;
  display: flex;
  flex-wrap: wrap;
`;

//Book Grid with dummy data passed into Book Tiles
const BookGrid = () => {
  return (
    <Container>
      <BookTile
        title="Eva Luna"
        author="Isabel Allende"
        image="images/covers/el.jpeg"
      />
      <BookTile
        title="Eleanor Oliphant is Completely Fine"
        author="Gail Honeyman"
        image="images/covers/eo.jpeg"
      />
      <BookTile
        title="Norwegian Wood"
        author="Haruki Murakami"
        image="images/covers/nw.jpeg"
      />

      <BookTile
        title="The Wind Up Bird Chronicle"
        author="Haruki Murakami"
        image="images/covers/wb.jpeg"
      />
      <BookTile
        title="Thursday Murder Club"
        author="Richard Osman"
        image="images/covers/tmc.jpeg"
      />

      <BookTile
        title="Conversations With Friends"
        author="Sally Rooney"
        image="images/covers/cwf.jpeg"
      />

      <BookTile
        title="Harry Potter and the Goblet of Fire"
        author="J.K Rowling"
        image="images/covers/gf.jpeg"
      />
      <BookTile
        title="Harry Potter and the Deathly Hallows"
        author="J.K Rowling"
        image="images/covers/dh.jpeg"
      />
    </Container>
  );
};

export default BookGrid;
