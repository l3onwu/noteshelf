import styled from "styled-components";

const Container = styled.div`
  // border: 1px solid white;
  margin: 0 0 20px 0;
  font-size: 14px;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
  li {
    // border: 1px solid white;
    padding: 15px 10px 15px 30px;
  }
  a,
  a:visited {
    color:white;
    margin: 0;
    text-decoration: none;
  }
  a: hover {
    color: grey;
  }
`;

//Temp Collection Array to populate sidebar collection list
const SidebarCollections = ({ collectionList }) => {
  return (
    <Container>
      <ul>
        {collectionList.map((c) => (
          <li>
            <a href=""># {c}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default SidebarCollections;
