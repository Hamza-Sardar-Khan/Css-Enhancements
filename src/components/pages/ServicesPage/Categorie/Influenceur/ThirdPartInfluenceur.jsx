import React from "react";
import styled from "styled-components";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";
export default function ThirdPartInfluenceur() {
  return (
    <ThirdPartInfluenceurStyled>
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
    </ThirdPartInfluenceurStyled>
  );
}

const ThirdPartInfluenceurStyled = styled.div`
  width: 32%;
  height: 348px;
  position: absolute;
  top: 47%;
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
  } /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1536px) {
    height: 340px;
    .main {
      h1 {
        font-size: 60px;
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
    top: 52%;
  }
  @media (max-width: 1280px) {
    width: 345px;
    .main {
      width: 345px;
    }
  }
  @media (max-width: 1024px) {
    top: 55%;
    left: 33%;
  }
  @media (max-width: 860px) {
    position: relative;
    top: 0%;
    left: 0%;
  }
  @media (max-width: 515px) {
    width: 85%;
    height: 340px;
    margin-left: 6.5%;
    .main {
      width: 100%;
      padding-bottom: 10px;
      p {
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
