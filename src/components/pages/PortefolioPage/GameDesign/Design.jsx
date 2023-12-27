import React from "react";
import styled from "styled-components";
import circle from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/CIRCLE.png";
import shield from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/logo guerrier 3.png";
import piece from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/pièce de cuivre.png";
import diamond from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/Gemmes.png";
import arrowBig from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/ArrowBig.png";
import arrow from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/Arrow.png";

export default function Design() {
  return (
    <DesignStyled>
      <h2>UX-UI</h2>
      <div className="content">
        <div className="first">
          <img src={circle} alt="" />
        </div>
        <div className="second">
          <img src={arrow} alt="" />
          <img src={arrowBig} alt="" />
        </div>
        <div className="third">
          <div className="layer1">
            <img src={shield} alt="" />
          </div>
          <div className="layer2">
            <img src={piece} alt="" />
            <img src={diamond} alt="" className="picture2" />
          </div>
        </div>
      </div>
    </DesignStyled>
  );
}
const DesignStyled = styled.div`
  width: 100%;
  height: 40vh;
  margin-top: 3%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    text-align: center;
    font: normal normal normal 20px "Cinzel";
    letter-spacing: 0px;
    color: #e0d1a1;
  }
  .content {
    width: 60%;
    height: 90%;
    display: flex;
    flex-direction: row;
    gap: 5%;
    .first {
      width: 33%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .second {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20%;
    }
    .third {
      width: 33%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .layer2,
      .layer1 {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
      .layer1 {
        img {
          width: 80%;
        }
      }
      .picture2 {
        width: 70%;
        height: 70%;
      }
      img {
        width: 60%;
        height: 60%;
      }
    }
  }
`;
