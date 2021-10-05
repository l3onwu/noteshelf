import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const plusIcon = <FontAwesomeIcon icon={faPlus} />

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
    padding: 10px 10px 10px 30px;
  }
  a, a:visited {
    margin: 0;
    color: white;
    text-decoration: none;
  }
  a: hover {
    color: grey;
  }
`;

const SidebarNav = () => {
  return (
    <Container>
      <ul>
        <li>My Library</li>
        <li><a href="">{plusIcon} New Collection</a></li>
      </ul>
    </Container>
  );
};

export default SidebarNav;