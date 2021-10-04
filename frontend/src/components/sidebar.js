import styled from "styled-components";

import UserCard from "./usercard";
import SidebarNav from "./sidebarnav";
import SidebarCollections from "./sidebarcollections";

const Container = styled.div`
  // border: 1px solid white;
  background-color: #1c1a24;
  height: 100vh;
  width: 300px;
  margin: 0;
  hr {
    border: 0;
    height: 1px;
    width: 90%;
    background: #333;
  }
`;

const Hero = styled.h1`
  // border: 1px solid white;
  font-family: "Varela Round", sans-serif;
  font-size: 40px;
  color: white;
  margin: 0;
  padding: 30px 30px 0 30px;
`;
const Tag = styled.p`
  // border: 1px solid white;
  font-size: 12px;
  color: #7f8af4;
  margin: 0;
  padding: 10px 30px 10px 30px;
`;

const collectionList = [
  "My reading list",
  "NYTimes best sellers 2018",
  "Scifi realism",
  "Wickedly deranged",
  "Fun mystery novels",
  "Data vizualization",
  "Writing, canonical manuals",
];

const Sidebar = () => {
  return (
    <Container>
      <Hero>Noteshelf</Hero>
      <Tag>Powered by Open Library</Tag>
      <UserCard />
      <SidebarNav />
      <hr></hr>
      <SidebarCollections collectionList={collectionList} />
    </Container>
  );
};

export default Sidebar;
