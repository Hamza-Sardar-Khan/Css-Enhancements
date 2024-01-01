import React from "react";
import styled from "styled-components";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";
import ChooseButton from "../../../../reusable-ui/ChooseButton";

export default function SecondPartParticulier() {
  return (
    <SecondPartParticulierStyled>
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
        className={"second"}

      />
      {/* <ChooseButton right={false} top={"30%"} left={"-25%"} /> */}
    </SecondPartParticulierStyled>
  );
}

const SecondPartParticulierStyled = styled.div`
width: 30%;
height: 435px;
position: absolute;
top: 25%;
left: 65%;
.main {
  position: relative;
  width: 100%;
  height: 80%;
  transform: perspective(600px) rotateY(-10deg);
  position: absolute;
  background: transparent linear-gradient(52deg, #dcd082 0%, #f3e9b9 100%) 0%
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
  cursor: pointer;
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
} /* RESPONSIVE DESIGN BEGINS HERE */
@media (max-width: 1536px) {
  height: 320px;
  .responsive {
    left: -28%;
  }
  .main {
    width: 320px;
    height:100%;
    h1 {
      font-size: 60px;
      color: #2b2b2b;
    }
    h5 {
      font: normal normal bold 12px "Century Gothic";
    }
    p {
      font: normal normal normal 11px "Century Gothic";
    }
    span {
      font-weight: bold;
    }
  }
  .second {
    display: none;
  }
}
@media (max-width: 1280px) {
  width: 345px;
  .main {
    width: 345px;
  }
}
@media (max-width: 1024px) {
  top: 35%;
  left: 57%;
}
@media (max-width: 860px) {
  position: relative;
  top: 0%;
  left: 0%;
  .main {
    transform: perspective(00px) rotateY(0deg);
  }
  .responsive {
    top: 90%;
    z-index: 2;
    width: 53%;
    left: -25%;
  }
}
@media (max-width: 515px) {
  width: 85%;
  height: 340px;
  margin-left: 6.5%;
  .main {
    width: 100%;
    padding-bottom: 20px;
    p {
      width: 89%;
      font-size: 0.9rem;
    }
  }
  .responsive {
    top: 100%;
    z-index: 2;
    width: 69.5%;
    left: -3%;
  }
}


`;
