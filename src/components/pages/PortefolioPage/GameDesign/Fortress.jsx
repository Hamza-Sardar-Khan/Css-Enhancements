import React from "react";
import styled from "styled-components";
import BlueTransparentSquare from "../../../reusable-ui/BlueTransparentSquare";
import concept from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/3.png";
import title from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/Fortress of Legends.png";
import resume from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/2.png";
import carac from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/4.png";
export default function Fortress() {
  return (
    <FortressStyled>
      <div className="title2">{/* <img src={title} alt="" /> */}</div>
      <div className="description">
        <p>
          Premier livret de présentation du jeu. Depuis le concept a bien évolué
          et est beaucoup moins ambitieux.
          <br />
          <br /> Ce type de document permet de mettre toutes les idées que l'on
          se fait du jeu sur papier. Cela permet de pouvoir prendre du recul et
          d'avoir une base sur laquelle se référer. Cela permet aussi de
          présenter notre vision des choses de manière plus concrètes. Pouvoir y
          intégrer des visuels, des inspirations simplifie l'immersion et donne
          une ligne directrice sur la DA que l'ont souhaite suivre.
          <br />
          <br /> C'est un document essentiel dès lors que l'on souhaite parler
          de son projet à différents interlocuteurs venant de tout horizons
        </p>
      </div>
      <div className="concept">
        <img src={concept} alt="" />
      </div>
      <div className="title">
        <img src={title} alt="" />
      </div>
      <div className="resume">
        <img src={resume} alt="" />
      </div>
      <div className="carac">
        <img src={carac} alt="" />
      </div>

      <div className="blue">
        <BlueTransparentSquare
          width={"5%"}
          height={"8%"}
          top={"306%"}
          left={"38%"}
          background={
            "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
          }
          opacity={"0.47"}
          zindex={"1"}
        />
        <BlueTransparentSquare
          width={"6%"}
          height={"9%"}
          top={"306%"}
          left={"84%"}
          background={
            "transparent linear-gradient(50deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
          }
          transform={"matrix(0.96, 0.03, 0.22, -0.75, 0, 0);"}
          opacity={"0.47"}
          zindex={"1"}
        />
        <BlueTransparentSquare
          width={"5%"}
          height={"9%"}
          top={"374%"}
          left={"6%"}
          background={
            "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
          }
          opacity={"0.47"}
          zindex={"1"}
        />
        <BlueTransparentSquare
          width={"5%"}
          height={"9%"}
          top={"415%"}
          left={"35%"}
          background={
            "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
          }
          opacity={"0.47"}
          zindex={"1"}
        />
        <BlueTransparentSquare
          width={"6%"}
          height={"9%"}
          top={"420%"}
          left={"83%"}
          background={
            "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
          }
          opacity={"0.47"}
          zindex={"1"}
        />
      </div>
    </FortressStyled>
  );
}

const FortressStyled = styled.div`
  width: 100%;
  height: 100vh;
  padding: 12% 0% 0% 16%;
  .title2{
    display:none;
  }
  .description {
    position: relative;
    width: 25%;
    height: 40%;
    background: transparent linear-gradient(48deg, #032c35 0%, #486e6c 100%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    p {
      width: 90%;
      text-align: justify;
      font: normal normal normal 12px Century Gothic;
      letter-spacing: 0px;
      color: #e0d1a1;
    }
  }
  img {
    width: 100%;
    height: 100%;
    box-shadow: -10px 10px 25px #00000080;
  }
  .concept {
    position: relative;
    top: -42%;
    left: 40%;
    width: 30%;
    height: 51%;
    z-index: 2;
  }
  .title,.title2 {
    position: relative;
    top: -55%;
    left: 17%;
    width: 26%;
    height: 46%;
    z-index: 1;
  }
  .resume {
    position: relative;
    width: 28%;
    height: 48%;
    top: -75%;
    left: -7%;
    z-index: 2;
  }
  .carac {
    position: relative;
    width: 29%;
    height: 51%;
    top: -123%;
    left: 40%;
    z-index: 0;
  }

  /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1536px) {
      .blue{
        display:none;
      }
    min-height: 900px;
    padding: 12% 0% 0% 14%;

    img {
      object-fit: cover;
    }
    .concept,
    .carac {
      width: 490px;
      height: 500px;
    }
    .title {
      width: 350px;
    }
    .resume {
      width: 410px;
      height: 400px;
    }

    .description {
      width: 370px;
    }
  }

  @media (max-width: 1280px) {
    padding: 12% 0% 0% 10%;
    margin-bottom:200px;
    .description {
      left: -7%;
    }

    .carac {
      top: -119%;
      z-index: 1;
    }
    .title {
      width: 350px;
    }
    .resume {
      top: -73%;
    }
  }

  @media (max-width: 1024px) {
    padding: 12% 0% 0% 0%;
    display:flex;
    flex-wrap:wrap;
    column-gap:4%;
    row-gap:4%;
    justify-content:center;
    margin-bottom:500px;
    .description{
      width:410px;
      height:400px;
    }
    .title{
      display:none;
    }
    .title2{
      background-image: url("../../../../../public/illustration site internet/portefolio/LengendOfFortress/Fortress of Legends.png");
      background-size: cover;
      background-position: 60% 45%;
      background-repeat: no-repeat;
      display:block;
      position: relative;
      top: 0%;
      height:30%;
      object-position: top !important;
      width:90%;
      left:0%;
    }

    .resume , .description , .concept , .carac {
      left:auto;
      top:auto;
  }

  @media (max-width: 938px) {
    margin-bottom:1500px;
  }

  @media (max-width: 640px) {
    margin-bottom:240%;
    .title2{
      height:15% ;
    }
    .resume , .description , .concept , .carac {
      width:100%;
      height:auto;
  }
  .description{
    padding:20px 0px;
    p{
      font-size:11px;
    }
  }
  }


  @media (max-width: 480px) {
    margin-bottom:210%;
  }

`;
