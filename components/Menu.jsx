import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import streamify from "../img/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import LibraryMusicOutlinedIcon from "@mui/icons-material/LibraryMusicOutlined";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import SportsBasketballOutlinedIcon from "@mui/icons-material/SportsBasketballOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import OutlinedFlagIcon from "@mui/icons-material/OutlinedFlag";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

// Styled Components
const Container = styled.div`
  flex: 1;
  background-color: ${({ theme }) => theme?.bg || "#f9f9f9"};
  height: 140vh;
  color: ${({ theme }) => theme?.text || "#000"};
  font-size: 14px;
  position: sticky;
  top: 0;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex: none;
    width: 100%;
    height: auto;
    position: relative;
  }
`;

const Wrapper = styled.div`
  padding: 8px 16px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  height: 40px;
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    font-weight: bold;
    background-color: ${({ theme }) => theme?.soft || "#e3e3e3"};
    border-radius: 5px;
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme?.soft || "#e3e3e3"};
    border-radius: 5px;
  }
`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme?.soft || "#ccc"};
`;

const Login = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #3ea6ff;
    color: white;
  }
`;

const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  color: #aaaaaa;
  margin-bottom: 20px;
`;

const Menu = ({ darkMode = false, setDarkMode = () => {} }) => {
  return (
    <Container>
      <Wrapper>
        {/* Logo Section */}
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <Logo>
            <Img src={streamify} alt="Streamify Logo" />
            Streamify
          </Logo>
        </Link>

        {/* Menu Items */}
        <StyledLink to="/" end>
          <Item>
            <HomeIcon titleAccess="Home" />
            Home
          </Item>
        </StyledLink>
        <StyledLink to="/explore">
          <Item>
            <ExploreIcon titleAccess="Explore" />
            Explore
          </Item>
        </StyledLink>
        <StyledLink to="/subscriptions">
          <Item>
            <SubscriptionsOutlinedIcon titleAccess="Subscriptions" />
            Subscriptions
          </Item>
        </StyledLink>
        <Hr />
        <StyledLink to="/library">
          <Item>
            <VideoLibraryOutlinedIcon titleAccess="Library" />
            Library
          </Item>
        </StyledLink>
        <StyledLink to="/history">
          <Item>
            <HistoryOutlinedIcon titleAccess="History" />
            History
          </Item>
        </StyledLink>
        <Hr />

        {/* Login Section */}
        <Login>
          Sign in to like videos, comment, and subscribe.
      
            <Button>
              <AccountCircleIcon /> SIGN IN
            </Button>
        
        </Login>
        <Hr />

        {/* Best of Streamify Section */}
        <Title>BEST OF STREAMIFY</Title>
        <StyledLink to="/music">
          <Item>
            <LibraryMusicOutlinedIcon titleAccess="Music" />
            Music
          </Item>
        </StyledLink>
        <StyledLink to="/gaming">
          <Item>
            <SportsEsportsOutlinedIcon titleAccess="Gaming" />
            Gaming
          </Item>
        </StyledLink>
        <StyledLink to="/sports">
          <Item>
            <SportsBasketballOutlinedIcon titleAccess="Sports" />
            Sports
          </Item>
        </StyledLink>
        <StyledLink to="/movies">
          <Item>
            <MovieOutlinedIcon titleAccess="Movies" />
            Movies
          </Item>
        </StyledLink>
        <StyledLink to="/news">
          <Item>
            <ArticleOutlinedIcon titleAccess="News" />
            News
          </Item>
        </StyledLink>
        <StyledLink to="/live">
          <Item>
            <LiveTvOutlinedIcon titleAccess="Live TV" />
            Live
          </Item>
        </StyledLink>
        <Hr />

        {/* Settings Section */}
        <Item>
          <SettingsIcon titleAccess="Settings" />
          Settings
        </Item>
        <Item>
          <OutlinedFlagIcon titleAccess="Report" />
          Report
        </Item>
        <Item>
          <HelpOutlineIcon titleAccess="Help" />
          Help
        </Item>
        <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon titleAccess="Toggle Theme" />
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Menu;
