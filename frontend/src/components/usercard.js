import styled from "styled-components";

const Container = styled.div`
  // border: 1px solid white;
  margin: 0 0 10px 0;
  padding: 20px 30px 10px 30px;
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  // border: 1px solid white;
  border-radius: 50%;
  height: 75px;
  width: 75px;
  object-fit: cover;
  margin: 0 20px 0 0;
`;

const UserText = styled.div`
  // border: 1px solid white;
  margin: 0;
  h3 {
    font-size: 14px;
    margin: 0 0 5px 0;
  }
  a, a:visited {
    color: white;
    font-size: 13px;
    margin: 0;
    text-decoration: none;
  }
  
`;

const UserCard = () => {
  return (
    <Container>
      <Avatar src="images/misc/avatar.jpeg"></Avatar>
      <UserText>
        <h3>Leon Wu</h3>
        <a href="">Sign Out</a>
      </UserText>
    </Container>
  );
};

export default UserCard;
