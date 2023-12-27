import React from "react";
import styled from "styled-components";
import dragon1 from "../../../../../../public/illustration site internet/portefolio/conceptArt/ProjectDragon/dragon1.png";
import dragon2 from "../../../../../../public/illustration site internet/portefolio/conceptArt/ProjectDragon/dragon2.png";
import dragon3 from "../../../../../../public/illustration site internet/portefolio/conceptArt/ProjectDragon/dragon3.png";
import dragon from "../../../../../../public/illustration site internet/portefolio/conceptArt/ProjectDragon/dragon.png";

export default function ProjectDragon() {
  return (
    <ProjectDragonStyled>
      <div className="infos">
        <div className="content">
          <p>
            L'idée de ce projet était de m'initier aux digitals painting animés.
            Très utiles, ces illustrations apportent une nouvelle dimension et
            ont une infinité d'applications différentes. Indispensable pour
            créer des fonds d'écrans animés, ou pour réaliser tout types
            d'overlays, écrans d'accueils, de chargement, d'attentes, notamment
            sur les platefromes de streaming comme twitch ou pour toute création
            vidéo sur Youtube ou autre.
            <br /> Cette approche du motion design m'a permis de débroussailler
            les principes de l'animation, et de la vidéo en 2D
          </p>
          <div className="bootstrap">
            <span>Différentes étapes de croquis :</span>
            <div className="croquis">
              <img src={dragon1} alt="" />
              <img src={dragon2} alt="" />
              <img src={dragon3} alt="" />
            </div>
          </div>
          <div className="palette">
            <span>Palette de couleur</span>
            <div className="couleur">
              <div className="orange"></div>
              <div className="pink"></div>
              <div className="purple"></div>
              <div className="purple2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="picture">
        <img src={dragon} alt="" />
      </div>
    </ProjectDragonStyled>
  );
}

const ProjectDragonStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10%;
  .infos {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #282828 0% 0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 83px;
    width: 37%;
    height: 52vh;

    .content {
      width: 80%;
      height: 90%;
      display: flex;
      flex-direction: column;
      gap: 10%;
      font-size: 10px;
      color: #ffffff;
      P {
        font: normal normal normal 12px/15px Century Gothic;
      }
      .bootstrap {
        span {
          font: normal normal normal 12px/15px Century Gothic;

          text-decoration: underline;
        }
        .croquis {
          display: flex;
          flex-direction: row;
          gap: 5%;
          img {
            width: 33%;
            height: 35%;
          }
        }
      }

      .palette {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        span {
          font: normal normal bold 12px Century Gothic;
          letter-spacing: 0px;
          color: #ffffff;
        }
        .couleur {
          background: #282828 0% 0% no-repeat padding-box;
          box-shadow: inset 0px -7px 8px #00000029;
          border-radius: 36px;
          width: 60%;
          height: 6vh;
          display: flex;
          justify-content: space-around;
          align-items: center;

          .orange {
            background: #f87735 0% 0% no-repeat padding-box;
            width: 15%;
            height: 80%;
            border-radius: 50%;
          }
          .pink {
            background: #e03a7a 0% 0% no-repeat padding-box;
            width: 15%;
            height: 80%;
            border-radius: 50%;
          }
          .purple {
            background: #6b3359 0% 0% no-repeat padding-box;
            width: 15%;
            height: 80%;
            border-radius: 50%;
          }
          .purple2 {
            background: #440771 0% 0% no-repeat padding-box;
            width: 15%;
            height: 80%;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .picture {
    width: 45%;
    height: 45%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
