import React from "react";
import styled from "styled-components";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";

export default function ThirdPart() {
  return (
    <ThirdPartStyled>
      <div className="main">
        <h1>PREMIUM</h1>

        <p>
          - Design haut de gamme et créatif <br /> - Création de matériel visuel
          avancé <br />- Illustrations personnalisées <br />- Révisions
          illimitées
          <br /> - Support prioritaire par email, chat ou téléphone <br /> -
          Gestion de projet dédiée
          <br />
          <br />
          <span>Prix mensuel : 1250€ TTC</span>
        </p>
      </div>
      <TransparentSquare
        width={"25%"}
        height={"32%"}
        top={"80%"}
        left={"-8%"}
      />
      <TransparentSquare
        width={"25%"}
        height={"40%"}
        top={"55%"}
        left={"80%"}
      />
    </ThirdPartStyled>
  );
}

const ThirdPartStyled = styled.div`
  width: 32%;
  height: 31vh;
  position: absolute;
  top: 56%;
  left: 33%;
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    background: transparent
      linear-gradient(66deg, #0f0f6b 0%, #28bec3 87%, #28c0c5 100%) 0% 0%
      no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3%;
    color: #e0d1a1;
    z-index: 2;
    h1 {
      font-size: 4.9vw;
    }
    p {
      font: normal normal normal 0.8vw "Century Gothic";
      text-align: justify;
      width: 80%;
    }
    span {
      font-weight: bold;
    }
  }
`;
