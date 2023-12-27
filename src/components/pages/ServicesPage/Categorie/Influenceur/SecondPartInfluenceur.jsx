import React from "react";
import styled from "styled-components";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";
import ChooseButton from "../../../../reusable-ui/ChooseButton";

export default function SecondPartInfluenceur() {
  return (
    <SecondPartInfluenceurStyled>
      <div className="main">
        <h1>STANDARD</h1>
        <h5>
          2 Visuels par semaine <br />
          <br />
        </h5>
        <p>
          - Service de design graphique plus avancé
          <br /> - Création de supports marketing (flyers, brochures) <br />-
          Jusqu'à 5 révisions incluses <br />- Support par email, chat et
          téléphone
          <br /> - Délais de livraison plus rapides
          <br />
          <br />
          <span>Prix mensuel : 449€ TTC</span>
        </p>
      </div>
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"-10%"}
        left={"-2%"}
      />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"85%"}
        left={"75%"}
      />
      {/* <ChooseButton right={false} top={"30%"} left={"-25%"} /> */}
    </SecondPartInfluenceurStyled>
  );
}

const SecondPartInfluenceurStyled = styled.div`
  width: 30%;
  height: 37vh;
  position: absolute;
  top: 25%;
  left: 65%;
  .main {
    position: relative;
    width: 100%;
    height: 100%;
    transform: perspective(600px) rotateY(-10deg);
    position: absolute;
    background: transparent linear-gradient(52deg, #8e82dc 0%, #b9eef3 100%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7%;
    color: #292929;
    z-index: 2;
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
