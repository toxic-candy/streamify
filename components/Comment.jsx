import React from "react";
import styled from "styled-components";
import clearImage from "../img/mr beast.png";

// Styled Components
const Container = styled.div`
  display: flex;
  gap: 10px;
  margin: 30px 0px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: ${({ theme }) => theme.text};
`;

const NameDateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Name = styled.span`
  font-size: 13px;
  font-weight: 500;
`;

const Date = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSoft};
`;

const Text = styled.span`
  font-size: 14px;
  line-height: 1.5;
`;

const Comment = () => {
  return (
    <Container>
      <Avatar src={clearImage} alt="Channel avatar" />
      <Details>
        <NameDateWrapper>
          <Name>John Doe</Name>
          <Date>1 day ago</Date>
        </NameDateWrapper>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
          eaque dicta iste quisquam vitae mollitia repellendus voluptas
          corrupti voluptates sequi? Libero ipsa dicta ad ipsum iusto,
          voluptatum nostrum quas dolorem.
        </Text>
      </Details>
    </Container>
  );
};

export default Comment;
