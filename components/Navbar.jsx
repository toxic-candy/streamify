import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0 10px;
  width: 100%;
  max-width: 600px;
  height: 40px;
  background-color: ${({ theme }) => theme.bg};
  box-shadow: 0px 1px 3px ${({ theme }) => theme.shadow};
`;


const Input = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  outline: none;
  width: 100%;
  font-size: 14px;
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    background-color: #3ea6ff;
    color: white;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        
        {/* Search Bar */}
        <Search>
          <Input placeholder="Search" />
          <SearchOutlinedIcon />
        </Search>
        
        {/* Sign-in Button */}
        <div className="signin-button">
        <Link to="/signin"  style={{ textDecoration: 'none', color: 'inherit' }}>
          <AccountCircleIcon />
          SIGN IN
        </Link>
        </div>
       
      </Wrapper>
    </Container>
  );
};

export default Navbar;
