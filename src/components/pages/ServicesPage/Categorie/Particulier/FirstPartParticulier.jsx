import React from "react";
import styled from "styled-components";
import { FaRegHandshake } from "react-icons/fa";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";
import ChooseButton from "../../../../reusable-ui/ChooseButton";

export default function FirstPartParticulier() {
  return (
    <FirstPartParticulierStyled>
      <div className="title">
        <p>ENTREPRISE</p>
        <div className="icon">
          <FaRegHandshake />
        </div>
      </div>
      <div className="main">
        <h1>BASIC</h1>
        <h5>
          1 Visuel par semaine
          <br />
          <br />
        </h5>
        <p>
          - Services de design de base
          <br />- Création d'un élément visuel simple : images / posts RS
          <br />- Un nombre limité de 3 révisions <br />- Support par e-mail ou
          par chat.
          <br />
          <br /> <span>Prix mensuel : 249€ TTC</span>
        </p>
      </div>
      {/* <ChooseButton right={true} top={"-80%"} left={"83%"} /> */}
      <TransparentSquare
        width={"10%"}
        height={"12%"}
        top={"22%"}
        left={"27%"}
      />
      <TransparentSquare width={"10%"} height={"12%"} top={"52%"} left={"5%"} />
    </FirstPartParticulierStyled>
  );
}

const FirstPartParticulierStyled = styled.div`
  width: 33%;
  height: 40vh;
  .title {
    position: relative;
    width: 50%;
    height: 35%;
    transform: perspective(150px) rotateY(10deg);
    background: transparent
      linear-gradient(63deg, #8227a1 0%, #b98c54 62%, #baa43c 100%) 0% 0%
      no-repeat padding-box;
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
  }
  .main {
    position: relative;
    background: transparent linear-gradient(55deg, #f5ebc3 0%, #ffffff 100%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    width: 80%;
    height: 80%;
    transform: translate(10%, -15%);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #292929;
    h1 {
      font-size: 4.9vw;
      color: #2b2b2b;
    }
    h5 {
      font: normal normal bold 0.8vw "Century Gothic";
    }
    p {
      font: normal normal normal 0.8vw "Century Gothic";
    }
    span {
      font-weight: bold;
    }
  }
`;
