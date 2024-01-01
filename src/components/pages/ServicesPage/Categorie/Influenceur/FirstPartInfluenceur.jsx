import React from "react";
import styled from "styled-components";
import { IoBusinessOutline } from "react-icons/io5";
import TransparentSquare from "../../../../reusable-ui/TransparentSquare";
import ChooseButton from "../../../../reusable-ui/ChooseButton";
import influenceur from "../../../../../../public/illustration site internet/services/influenceurs mes copuilles.png";
export default function FirstPartInfluenceur() {
  return (
    <FirstPartInfluenceurStyled>
      <div className="title">
        <p>INFLUENCEUR</p>
        <div className="icon">
          <img src={influenceur} alt="" />
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
    </FirstPartInfluenceurStyled>
  );
}

const FirstPartInfluenceurStyled = styled.div`
  width: 33%;
  height: 435px;

  .main {
    position: relative;
    cursor: pointer;
    background: transparent linear-gradient(55deg, #d0c3f5 0%, #ffffff 100%) 0%
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

  .title {
    position: relative;
    width: 50%;
    height: 35%;
    transform: perspective(150px) rotateY(10deg);
    background: transparent
      linear-gradient(63deg, #25e0e7 0%, #8246a6 62%, #6d2f83 100%) 0% 0%
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
      img {
        width: 70%;
      }

      width: 200px;
      height: 80px;

      p {
        font-size: 14px;
      }

      .icon {
        font-size: 60px;
      }
    }
  }

  /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1536px) {
    height: 340px;
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

    .title{
      width: 200px;
      height: 80px;
  
      p{
        font-size: 14px;
      }
  
      .icon{
        font-size:60px;
      }
    }
  }


  
 

  @media (max-width: 860px) {
    margin-right: 10%;
    .main {
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
    height: 340px;
    .main {
      width: 90%;
      padding-bottom: 10px;
      p {
        width: 89%;
        font-size: 0.9rem;
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
