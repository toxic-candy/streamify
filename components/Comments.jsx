import React from "react";
import styled from "styled-components";
import clearImage from "../img/mr beast.png"; // Ensure the path is correct
import Comment from "../components/Comment";
// Styled Components
const Container = styled.div`
  margin-top: 20px;
`;

const NewComment = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.soft};
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
  width: 100%;
  font-size: 14px;
  padding: 5px;

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Comments = () => {
  return (
    <Container>
      <NewComment>
        <Avatar src={clearImage} alt="channel image" />
        <Input placeholder="Add a comment..." />
      </NewComment>
      <Comment/>
      <Comment/>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </Container>
  );
};

export default Comments;
