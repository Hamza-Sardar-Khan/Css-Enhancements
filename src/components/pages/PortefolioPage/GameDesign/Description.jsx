import React from "react";
import styled from "styled-components";
import castle from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/Maquette-2.png";
import door from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/illustration_porte_semi_realiste.png";
export default function Description() {
  return (
    <DescriptionStyled>
      <div className="container">
        <div className="block" id="start">
          <p>
            Forteress of legends est un jeu mobile téléchargeable sur Android ou
            IOS. Voici le résumé de 4 mois de design, de graphisme,
            d'illustrations.
            <br /> En tout c'est des fonds, des bâtiments des personnages, des
            monstres, des musiques, de l'UX/UI
          </p>
        </div>
        <div className="block">
          <p>
            Le gameplay est composé de deux thématique : une gestion de ville,
            et un système de combat suivant le fonctionnement des tower defense.
          </p>
        </div>
        <div className="block" id="start">
          <p>
            Ci-contre à gauche une première maquette réalisée avec des éléments
            3D (libre de droits). Le rendu est magnifique mais l'esthétique très
            médiévale et assez rustique ne colle pas avec l'ambiance plus
            moderne, plus lisse que je souhaite obtenir.
          </p>
        </div>
        <div className="block">
          <p>
            Sur la droite la toute première illustration avec des textures
            réalistes en s'essayant à une vue isométrique. Le but : faire de la
            fausse 3D avec de la 2D.
          </p>
        </div>
      </div>
      <div className="castle">
        <img src={castle} alt="" />
      </div>
      <div className="door">
        <img src={door} alt="" />
      </div>
    </DescriptionStyled>
  );
}

const DescriptionStyled = styled.div`
  width: 100%;
  height: 85vh;
  margin-top: 14%;

  .container {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 13%;

    .block {
      width: 38%;
      height: 14%;
      background: #282828 0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 85%;
        height: 70%;
        text-align: justify;
        font: normal normal normal 12px Century Gothic;
        letter-spacing: 0px;
        color: #ffffff;
      }
    }
    #start {
      margin-left: -13%;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .castle {
    position: relative;
    width: 19%;
    height: 75%;
    top: -70%;
    left: 7%;
  }
  .door {
    position: relative;
    width: 35%;
    height: 73%;
    top: -170%;
    left: 65%;
  }
`;
