import React from "react";
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ReplyOutlinedIcon from "@mui/icons-material/ReplyOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import clearImage from "../img/mr beast.png";
import Comments from "../components/Comments";
import Card from "../components/Card";

// Styled Components
const Container = styled.div`
  display: flex;
  gap: 24px;
`;

const Content = styled.div`
  flex: 5;
`;

const VideoWrapper = styled.div`
  position: relative;
  width: 800px;
  
  margin: 0 auto;
  overflow: hidden;
  padding-top: 56.25%; /* Aspect ratio for 16:9 */
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text};
`;

const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Info = styled.div`
  color: ${({ theme }) => theme.textSoft};
`;

const Buttons = styled.div`
  display: flex;
  gap: 20px;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;

const Recommendation = styled.div`
  flex: 8;
`;

const Channel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChannelInfo = styled.div`
  display: flex;
  gap: 10px;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ChannelDetail = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelCounter = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
  margin-top: 5px;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text};
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  font-weight: 500;
  color: white;
  border: none;
  border-radius: 3px;
  height: 36px;
  padding: 0 15px;
  cursor: pointer;

  &:hover {
    background-color: #e52400;
  }
`;

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
          <Iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        </VideoWrapper>
        <Title>Test Video</Title>
        <Details>
          <Info>7,948,154 views • Jun 22, 2022</Info>
          <Buttons>
            <Button>
              <ThumbUpAltOutlinedIcon />123k
            </Button>
            <Button>
              <ThumbDownAltOutlinedIcon />
            </Button>
            <Button>
              <ReplyOutlinedIcon /> Share
            </Button>
            <Button>
              <DownloadOutlinedIcon /> Download
            </Button>
          </Buttons>
        </Details>
        <Hr />
        <Channel>
          <ChannelInfo>
            <Image src={clearImage} alt="Channel Image" />
            <ChannelDetail>
              <ChannelName>Rand</ChannelName>
              <ChannelCounter>1M subscribers</ChannelCounter>
              <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Description>
            </ChannelDetail>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr />
        <Comments />
      </Content>
      <Recommendation>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
        <Card type="sm"/>
      
      
      
      </Recommendation>
    </Container>
  );
};

export default Video;
