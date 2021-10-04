import BookGrid from "./components/bookgrid";
import styled from "styled-components";

const Container = styled.div`
  // border: 1px solid white;
  background-color: #282732;
  height: 100vh;
  width: 100%;
`;

const App = () => {
  return (
    <div>
      {/* <p>Hello, World</p> */}
      <Container>
        <BookGrid />
      </Container>
    </div>
  );
};

export default App;
