import React from "react";
import styled from "styled-components";

export default function PortefolioProject({ label, onClick }) {
  return (
    <PortefolioProjectStyled onClick={onClick}>
      <span>{label}</span>
    </PortefolioProjectStyled>
  );
}

const PortefolioProjectStyled = styled.div`
  width: 100%;
  height: 20%;
  box-sizing: border-box;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display: flex;
  align-items: center;
  font-size: 30px;
  cursor: pointer;
  span {
    padding-left: 20px;
  }
`;
