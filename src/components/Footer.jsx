import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -40px;
  width: 100%;
  font-family:"Arial";
  font-weight:700 ;
  font-size:18px ;
  letter-spacing:1px ;
`;

const LinkA = styled.a`
text-decoration:none ;
color:blue !important ;
cursor: pointer;
`;

export function Footer() {
  return (
    <FooterDiv>
      Made with ❤️ by&nbsp;<lineinkA href="https://github.com/Naveen-7000"> Naveen Bhusare </lineinkA>
    </FooterDiv>
  );
}
