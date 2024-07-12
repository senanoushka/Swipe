import React from "react";
import styled from "styled-components";
import footerImage from "./Images/Footer.jpeg"; // Import the local image

// Define the styled components
const FooterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

const FooterImage = styled.img`
  max-width: 110%;
  height: auto;
`;

// Define the Footer component
const Footer = () => {
  return (
    <FooterWrapper style={{ marginTop: "20rem" }}>
      <FooterImage src={footerImage} alt="Footer Image" /> {/* Use the imported image */}
    </FooterWrapper>
  );
};

export default Footer;
