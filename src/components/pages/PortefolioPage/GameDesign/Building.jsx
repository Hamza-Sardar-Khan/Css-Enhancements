import React from "react";
import styled from "styled-components";
import maison from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/maison 1 (sans shadow).png";
import moulin from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/moulin-1.png";
import scierie from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/scierie.png";
import forge from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/forge 1.png";
import chateau from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/chateau 1.png";

export default function Building() {
  return (
    <BuildingStyled>
      <h2>Bâtiments</h2>
      <div className="content">
        <div className="parents">
          <div className="picture">
            <img src={maison} alt="" />
          </div>
          <p>La maison</p>
        </div>
        <div className="parents">
          <div className="picture">
            <img src={moulin} alt="" />
          </div>
          <p>Le Moulin</p>
        </div>
        <div className="parents">
          <div className="picture">
            <img src={scierie} alt="" />
          </div>
          <p>La scierie</p>
        </div>
        <div className="parents">
          <div className="picture">
            <img src={forge} alt="" />
          </div>
          <p>La forge</p>
        </div>
        <div className="parents">
          <div className="picture">
            <img src={chateau} alt="" />
          </div>
          <p>Le chateau </p>
        </div>
      </div>
    </BuildingStyled>
  );
}

const BuildingStyled = styled.div`
  width: 100%;
  min-height: 37vh;
  margin-top: 2.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3%;
  h2 {
    text-align: center;
    font: normal normal normal 20px "Cinzel";
    letter-spacing: 0px;
    color: #e0d1a1;
  }
  .content {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    .parents {
      width: 18%;
      height: 100%;
      background: #282828 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      display: flex;
      align-items: center;
      flex-direction: column;

      .picture {
        width: 90%;
        height: 85%;
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      p {
        text-align: center;
        font: normal normal normal 22px/40px "Cinzel";
        letter-spacing: 0px;
        color: #e0d1a1;
      }
    }
  }

  @media (max-width: 1280px) {
    margin-bottom:200px;
    .parents{
      width:230px  !important;
      height: 285px !important;
      
    }
    .content{
      flex-wrap: wrap;
      row-gap: 50px;
      column-gap: 50px;
    }
  }

  @media (max-width: 500px) {
    margin-bottom:100px;
    .parents{
      width:80%  !important;
      height: 285px !important;
      
    }
    .content{
      flex-wrap: wrap;
      row-gap: 50px;
      column-gap: 50px;
    }
  }
`;
