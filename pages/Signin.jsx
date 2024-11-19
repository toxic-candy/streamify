import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.soft};
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  width: 350px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${({ theme }) => theme.textSoft};
  border-radius: 5px;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const Button = styled.button`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: #cc1a00;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e52400;
  }
`;

const Subtitle = styled.h2`
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  color: ${({ theme }) => theme.textSoft};
`;

const Link = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #3ea6ff;
  cursor: pointer;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

const Signin = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button>Sign In</Button>
        <Subtitle>New to YouTube?</Subtitle>
        <Link>Create an account</Link>
      </Wrapper>
    </Container>
  );
};

export default Signin;
