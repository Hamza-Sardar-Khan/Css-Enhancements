import React from "react";
import styled from "styled-components";
import logo from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/logo FL.png";
import logoFL from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/logo FL V2.png";
import logoFLOmbre from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/logo FL complte ombrage présent pas coupé.png";
export default function Logo() {
  return (
    <LogoStyled>
      <h2>Logo</h2>
      <div className="content">
        <div className="version">
          <p>
            3 versions furent nécessaires avant que je trouve la bonne direction
            pour la réalisation de ce logo.
          </p>
          <div className="picture">
            <img src={logo} alt="" />
            <img src={logoFL} alt="" />
          </div>
        </div>
        <div className="logo">
          <img src={logoFLOmbre} alt="" />
        </div>
        <div className="description">
          <p>
            Plusieurs éléments étaient essentiels pour moi : bien sûr il devait
            contenir les initials du jeu Forteress of Legends. Ensuite l'aspect
            médiéval devait ressortir tout en gardant une esthétique moderne et
            épuré. Esthétique que je ne retrouvai pas dans les deux premières
            versions du logo. Enfin le côté chateau fort, forteresse devait s'y
            retrouver.
          </p>
        </div>
      </div>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  width: 100%;
  height: 40vh;
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h2 {
    font: normal normal normal 20px "Cinzel";
    letter-spacing: 0px;
    color: #e0d1a1;
  }
  .content {
    width: 85%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .version {
      width: 30%;
      height: 80%;
      background: rgba(40, 40, 40, 0.46) 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      p {
        padding-top: 5%;
        width: 60%;
        text-align: center;
        font: normal normal normal 12px Century Gothic;
        letter-spacing: 0px;
        color: #e0d1a1;
        opacity: 1;
      }
      .picture {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10%;
        img {
          width: 30%;
          height: 60%;
          opacity: 1;
        }
      }
    }
    .logo {
      width: 30%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .description {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        font: normal normal normal 14px/17px Century Gothic;
        letter-spacing: 0px;
        color: #e0d1a1;
      }
    }
  }
`;
