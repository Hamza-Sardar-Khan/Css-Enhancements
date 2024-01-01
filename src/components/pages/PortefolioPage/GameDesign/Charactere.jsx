import styled from "styled-components";
import guerrier from "../../../../../public/illustration site internet/portefolio/LengendOfFortress/GUERRIER.png";
import BlueTransparentSquare from "../../../reusable-ui/BlueTransparentSquare";

export default function Charactere() {
  return (
    <CharactereStyled>
      <h2>Game design : façonneur d'expériences ludiques</h2>
      <div className="content">
        <div className="text">
          <div className="first-block">
            <p>
              Plongez-vous dans l'épopée captivante de la création de "Fortress
              of Legend", un projet personnel qui fusionne ma passion pour le
              jeu vidéo et l'univers médiéval fantastique
            </p>
            <div className="blue">
              <BlueTransparentSquare
                width={"6%"}
                height={"8%"}
                top={"125%"}
                left={"17%"}
                background={
                  "transparent linear-gradient(50deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                transform={"matrix(0.94, 0.2, -0.21, 0.98, 0, 0);"}
                opacity={" 0.47"}
                zindex={"1"}
              />
              <BlueTransparentSquare
                width={"4%"}
                height={"6%"}
                top={"126%"}
                left={"0.5%"}
                background={
                  "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                opacity={" 0.47"}
                zindex={"1"}
              />{" "}
              <BlueTransparentSquare
                width={"6%"}
                height={"8%"}
                top={"125%"}
                left={"17%"}
                background={
                  "transparent linear-gradient(50deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                transform={"matrix(0.94, 0.2, -0.21, 0.98, 0, 0);"}
                opacity={" 0.47"}
                zindex={"1"}
              />
              <BlueTransparentSquare
                width={"4%"}
                height={"6%"}
                top={"126%"}
                left={"0.5%"}
                background={
                  "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                opacity={" 0.47"}
                zindex={"1"}
              />
            </div>
          </div>
          <div className="second-block">
            <p>
              La création d'un jeu, tel que le projet "Fortress of Legend",
              exige une Direction Artistique (DA) complète qui transcende la
              simple conception visuelle.
              <br />
              <br /> Ici tout se doit d'être cohérent. De la création du logo au
              choix de la palette de couleur, à la création des classes, de
              l'environnement, des illustrations des bâtiments, ou bien de
              l'élaboration de l'interface utilisateur.
            </p>
            <div className="blue">
              <BlueTransparentSquare
                width={"5%"}
                height={"8%"}
                top={"147%"}
                left={"10%"}
                background={
                  "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
                }
                opacity={" 0.47"}
                zindex={"1"}
              />
            </div>
          </div>
          <div className="third-block">
            <p>
              À travers ce parcours créatif, "Fortress of Legend" prend vie, non
              seulement comme un projet de jeu, mais comme un voyage artistique
              et narratif. C'est l'histoire de la naissance d'un monde virtuel
              où les pixels deviennent des portails vers des royaumes
              fantastiques, et où chaque détail graphique raconte une légende à
              découvrir. Suivez le fil de cette aventure visuelle, où la passion
              pour le jeu vidéo et l'amour de l'univers médiéval se rencontrent
              pour créer une forteresse de légendes.
            </p>
          </div>
          <div className="blue">
            <BlueTransparentSquare
              width={"4%"}
              height={"7%"}
              top={"172%"}
              left={"22%"}
              background={
                "transparent linear-gradient(47deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              opacity={" 0.47"}
              zindex={1}
            />
            <BlueTransparentSquare
              width={"6%"}
              height={"8%"}
              top={"152%"}
              left={"45%"}
              background={
                "transparent linear-gradient(51deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              transform={"matrix(0.94, 0.2, -0.21, 0.98, 0, 0);"}
              opacity={" 0.47"}
              zindex={1}
            />
          </div>
        </div>
        <div className="charactere">
          <img src={guerrier} alt="" />
          <div className="blue">
            <BlueTransparentSquare
              width={"18%"}
              height={"40%"}
              top={"155%"}
              left={"80%"}
              background={
                "transparent linear-gradient(65deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              transform={"matrix(0.99, 0.03, 0.09, 0.36, 0, 0);"}
              opacity={" 0.76"}
              zindex={"1"}
            />
            <BlueTransparentSquare
              width={"7%"}
              height={"25%"}
              top={"120%"}
              left={"78%"}
              background={
                "transparent linear-gradient(65deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              opacity={" 0.26"}
              zindex={"1"}
            />
            <BlueTransparentSquare
              width={"5%"}
              height={"25%"}
              top={"120%"}
              left={"95%"}
              background={
                "transparent linear-gradient(27deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box;"
              }
              opacity={" 0.15"}
              zindex={"1"}
            />
            <BlueTransparentSquare
              width={"4%"}
              height={"13%"}
              top={"138%"}
              left={"76%"}
              background={
                "transparent linear-gradient(32deg, #032C35 0%, #486E6C 100%) 0% 0% no-repeat padding-box"
              }
              opacity={" 0.47"}
              zindex={"1"}
            />
          </div>
        </div>
      </div>
    </CharactereStyled>
  );
}

const CharactereStyled = styled.div`
  max-width: 100%;
  min-height: 90vh;
  padding-left: 1.3%;
  .content {
    width: 100%;
    height: 60vh;
    margin-top: 5%;
    display: flex;
  }
  h2 {
    width: 90%;
    text-align: justify;
    font: normal normal normal 75px Bebas Neue;
    letter-spacing: 0px;
    color: #ffffff;
    text-shadow: 0px 10px 6px #00000029;
  }
  .text {
    width: 50%;
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 7%;
    p {
      width: 90%;
      text-align: justify;
      font: normal normal normal 10px Century Gothic;
      letter-spacing: 0px;
    }
    .first-block,
    .second-block,
    .third-block {
      width: 40%;
      height: 9vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent linear-gradient(79deg, #011215 0%, #043a48 100%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      z-index: 2;
    }
    .second-block {
      width: 50%;

      z-index: 2;
      margin-left: 20%;
      height: 18vh;
    }
    .third-block {
      width: 50%;
      margin-left: 45%;
      height: 18vh;
      z-index: 2;
    }
  }
  .charactere {
    width: 50%;
    height: 60vh;
    display: flex;
    justify-content: flex-end;
    img {
      transform: rotateY(-180deg);
      z-index: 2;
    }
    overflow: hidden;
  }

  /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1536px) {
    min-height: 750px !important;
    .content {
      height: auto;
    }
    .blue {
      display: none;
    }
    h2 {
      font-size: 60px;
      width: 100%;
    }
    .charactere {
      width: 493px;
      height: 600px;
      justify-content: center;
    }
    .text {
      width: 70%;
      height: 500px;
      p {
        font-size: 12px;
      }
    }
    .second-block {
      width: 70%;
      height: 190px !important;
    }
    .third-block {
      width: 70%;
      height: 190px !important;
    }
  }

  @media (max-width: 1280px) {
    .charactere {
      width: 403px;
      height: 500px;
      justify-content: center;
    }
    .first-block {
      width: 60% !important;
    }
    .second-block {
      width: 80% !important;
      margin-left: 10% !important;
    }
    .third-block {
      width: 80% !important;
      margin-left: 25% !important;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 48px;
      text-align: center;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 38px;
      text-align: center;
      margin-bottom: 70px !important;
    }
    .first-block {
      width: 65% !important;
    }
    .second-block {
      width: 80% !important;
      margin-left: 0% !important;
    }
    .third-block {
      width: 95% !important;
      margin-left: 0% !important;
    }
  }

  @media (max-width: 640px) {
    .text {
      width: 100%;
    }
    .content {
      position: relative;
    }
    .charactere {
      position: absolute;
      width: 283px;
      height: 400px;
      right: -30px;
      top: -73px;
    }
    .first-block {
      width: 55% !important;
      height: 100px !important;
    }

    .second-block {
      width: 50% !important;
    }
    .third-block {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
    .charactere {
      position: absolute;
      width: 243px;
      height: 300px;
      right: -30px;
      top: 50px;
    }
    .first-block {
      width: 68% !important;
    }

    .second-block {
      width: 55% !important;
      padding: 15px 0px;
    }
    .third-block {
      width: 100%;
    }
  }
`;
