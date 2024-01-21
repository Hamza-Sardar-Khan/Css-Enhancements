import React from "react";
import styled from "styled-components";

export default function PortefolioProject({ label, onClick, height }) {
  return (
    <PortefolioProjectStyled onClick={onClick} height={height}>
      <span>{label}</span>
    </PortefolioProjectStyled>
  );
}

const PortefolioProjectStyled = styled.div`
  width: 100%;
  height: ${(props) => props.height}px;
  box-sizing: border-box;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  font-size: 30px;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  span {
    padding-left: 20px;
  }

  @media (max-height: 790px) {
    height: ${(props) => props.height-30}px;
  }

  @media (max-height: 600px) {
   
      height: ${(props) => props.height-52}px;
  }
`;