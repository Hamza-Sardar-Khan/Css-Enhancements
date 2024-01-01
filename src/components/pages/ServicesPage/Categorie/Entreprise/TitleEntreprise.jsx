import React from "react";
import styled from "styled-components";
import { IoBusinessOutline } from "react-icons/io5";

export default function TitleEntreprise({ width, height }) {
  return (
    <TitleEntrepriseStyled width={width} height={height}>
      <p>ENTREPRISE</p>
      <div className="icon">
        <IoBusinessOutline />
      </div>
    </TitleEntrepriseStyled>
  );
}

const TitleEntrepriseStyled = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: perspective(150px) rotateY(10deg);
  background: linear-gradient(63deg, #0f0f6b 0%, #28bec3 87%, #28c0c5 100%);
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 3;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    font: normal normal normal 1vw Century Gothic;
    width: 50%;
    height: 100%;
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    font-size: 100px;
  }

  @media (max-width: 1280px) {
    width: 200px;
    height: 80px;

    p{
      font-size: 14px;
    }

    .icon{
      font-size:60px;
    }
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 768px) {
    a {
      font-size: 20px;
    }
  }

  @media (max-width: 640px) {
  }
`;
