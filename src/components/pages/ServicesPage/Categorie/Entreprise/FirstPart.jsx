import React from "react";
import styled from "styled-components";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";
import ChooseButton from "../../../../reusable-ui/ChooseButton";
import TitleEntreprise from "./TitleEntreprise";
import { useNavigate } from "react-router-dom";

export default function FirstPart() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <FirstPartStyled>
      <TitleEntreprise width={"50%"} height={"35%"} />
      <div className="main" onClick={() => handleClick("./basic")}>
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
      <ChooseButton
        right={true}
        top={"-80%"}
        left={"83%"}
        className={"responsive"}
        onClick={() => handleClick("../services/buy")}
      />
      <TransparentSquare
        width={"10%"}
        height={"12%"}
        top={"43%"}
        left={"27%"}
      />
      <TransparentSquare width={"10%"} height={"12%"} top={"52%"} left={"5%"} />
    </FirstPartStyled>
  );
}

const FirstPartStyled = styled.div`
width: 33%;
height: 435px;

.main {
  position: relative;
  cursor: pointer;
  background: transparent linear-gradient(56deg, #c3f0f5 0%, #ffffff 100%) 0%
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

/* RESPONSIVE DESIGN BEGINS HERE */
@media (max-width: 1536px) {
  height:340px;
  .main {
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


}

@media (max-width: 1280px) {
  width: 345px;
  .main {
    width: 345px;
  }

  .responsive {
    left: 106%;
  }
}

@media (max-width: 860px) {
  margin-right: 10%;
  .main{
    height: 100%;
  }
  .responsive {
    top: -20%;
    z-index: 2;
    width: 53%;
    left: 75%;
  }
}

@media (max-width: 515px) {
  width: 95%;
  height:340px;
  .main {
    width: 90%;
    padding-bottom: 10px;
    p{
      width:89%;
      font-size:0.9rem;
    }
  }
  margin-right: 0%;
  .responsive {
    top: -19%;
    z-index: 2;
    width: 69.5%;
    left: 7%;
  }
}

`;
