import styled from "styled-components";

import Sidebar from "./components/sidebar"
import BookGrid from "./components/bookgrid";

const Container = styled.div`
  // border: 1px solid white;
  background-color: #282732;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const App = () => {
  return (
    <div>
      {/* <p>Hello, World</p> */}
      <Container>
        <Sidebar />
        <BookGrid />
      </Container>
    </div>
  );
};

export default App;
