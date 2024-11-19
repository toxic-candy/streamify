import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sampleImage from "../img/vip.webp"; // Adjust the path based on your project structure
import clearImage from "../img/mr beast.png"; // Ensure the file name matches your actual file


const Container = styled.div`
  width: ${props => props.type !== "sm" && "360px"};
  margin-bottom: ${(props)=>props.type === "sm"? "10px" : "45px"};
  cursor: pointer;
  transition: transform 0.3s;
  display:${(props)=>props.type === "sm"&& "flex"};
  gap: 30px;


  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height:${(props)=>props.type === "sm"? "120px" : "202px"} ;
  object-fit: cover;
  background-color: #999;
  border-radius: 10px;
  flex: 1;  
`;

const Details = styled.div`
  display: flex;
  margin-top:${props => props.type !== "sm" && "16px"} ;
  gap: 10px;
  flex: 1;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
  display: ${props => props.type === "sm" && "none"};
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.textSoft};
  }
`;

const ChannelName = styled.h4`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;  

const Info = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
`;

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{ textDecoration: "none", color: "inherit" }}>
      <Container type={type}>
        {/* Thumbnail */}
        <Image  type={type} src={sampleImage} alt="Thumbnail" />

        {/* Details */}
        <Details type={type}>
          {/* Channel Image */}
          <ChannelImage type={type} src={clearImage} alt="Channel Image" />
          <Texts>
            {/* Video Title */}
            <Title>Test Video</Title>
            {/* Channel Name */}
            <ChannelName>Streamify</ChannelName>
            {/* Additional Info */}
            <Info>660,908 views • 1 day ago</Info>
          </Texts>
        </Details>
      </Container>
    </Link>
  );
};

export default Card;
