import React from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";
import fortress from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/FOL1.png";
import Charactere from "./Charactere";
import Fortress from "./Fortress";
import Description from "./Description";
import Logo from "./Logo";
import Palette from "./Palette";
import Building from "./Building";
import Guerrier from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/GUERRIER_BAN.png";
import Design from "./Design";

export default function GameDesignPage() {
  return (
    <GameDesignPageStyled>
      <ProjectNavBar label={"GAME DESIGN"} />
      <div className="first"></div>
      <Charactere />
      <div className="fortress-picture">
        <img src={fortress} alt="" />
      </div>
      <Fortress />
      <Description />
      <Logo />
      <Design />
      <Palette />
      <Building />
      <div className="soldat">
        <img src={Guerrier} alt="" />
      </div>
      <div className="description-jeu">
        <div className="first-description">
          <p>
            Le jeu doit comporter 7 classes de personnage, tous ayant un des
            pouvoirs et attributs différents. Cela à pour but de permettre aux
            joueurs d'expérimenter des gameplays variés qui collent à leur
            playstyle.
          </p>
        </div>
        <div className="second-description">
          <p>
            La difficulté pour moi réside dans l'illustration des personnages.
            Cet exercice nouveau nécessite une multitude de versions différentes
            afin de créer les animations de ceux ci.
          </p>
        </div>
      </div>
      <p>
        Le jeu Forteress of Legend est toujours en développement, c'est pour moi
        un bac à sable de création sans limite.
      </p>
    </GameDesignPageStyled>
  );
}

const GameDesignPageStyled = styled.div`
  width: 100%;
  height: 775vh;
  overflow: hidden;
  color: #ffffff;

  &::before {
    content: "";
    position: absolute;
    height: 775vh;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../../public/illustration site internet/portefolio/LengendOfFortress/FOND_3.png");
    background-size: 100% auto; // Largeur à 100%, hauteur auto pour garder les proportions
    background-position: top center; // Centrer l'image
    background-repeat: no-repeat; // Ne pas répéter l'image
    z-index: -1;
  }
  .first {
    width: 100%;
    height: 80vh;
  }

  .fortress-picture {
    width: 100%;
    height: 100vh;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .soldat {
    position: relative;
    top: 3%;
    left: 6%;
    width: 47.3%;
    height: 7%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description-jeu {
    position: relative;
    top: -1.5%;
    left: 55%;
    width: 40%;
    height: 4%;
    .first-description,
    .second-description {
      width: 60%;
      height: 60%;
      background: transparent linear-gradient(68deg, #011215 0%, #043a48 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      z-index: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        font: normal normal normal 12px/15px Century Gothic;
        letter-spacing: 0px;
        color: #ffffff;
        width: 80%;
        text-align: justify;
      }
    }
    .second-description {
      position: relative;
      top: -10%;
      left: 40%;
      z-index: 0;
    }
  }
  p {
    text-align: center;
    font: normal normal normal 18px/22px Century Gothic;
    letter-spacing: 0px;
    color: #e0d1a1;
  }
`;
