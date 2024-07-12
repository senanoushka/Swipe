import React from "react";
import styled from "styled-components";
import headerImage from "./Images/Header.jpg"; // Import the local image

// Define the styled components
const HeaderWrapper = styled.div`
  width: 100%; // Set width to 100% to fit the container
  max-height: 100px;
  display: flex;
  justify-content: center; // Center the content horizontally
  align-items: center; // Center the content vertically
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
  max-height: 100%; // Ensure the image fits within the header's height
  height: auto;
  width: auto;
  max-width: 110%; // Ensure the image fits within the header's width
`;

// Define the Header component
const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={headerImage} alt="Header" />
    </HeaderWrapper>
  );
};

export default Header;
