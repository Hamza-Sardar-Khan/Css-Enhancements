import React from "react";
import styled from "styled-components";
import corniche from "../../../../../../public/illustration site internet//portefolio/conceptArt/corniche_moi_dragons.png";
export default function ProjectCorniche() {
  return (
    <ProjectCornicheStyled>
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
          <div className="palette">
            <span>Palette de couleur</span>
            <div className="couleurs">
              <div className="couleur1"></div>
              <div className="couleur2"></div>
              <div className="couleur3"></div>
              <div className="couleur4"></div>
              <div className="couleur5"></div>
              <div className="couleur6"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="picture">
        <img src={corniche} alt="" />
      </div>
    </ProjectCornicheStyled>
  );
}

const ProjectCornicheStyled = styled.div`
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
    border-radius: 256px;
    width: 41%;
    height: 53vh;

    .content {
      width: 70%;
      height: 70%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 10%;
      font-size: 10px;
      color: #ffffff;
      P {
        font: normal normal normal 12px/15px Century Gothic;
      }

      .palette {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        span {
          font: normal normal bold 16px/20px Century Gothic;
          letter-spacing: 0px;
          color: #ffffff;
        }
        .couleurs {
          background: #282828 0% 0% no-repeat padding-box;
          box-shadow: inset 0px -7px 8px #00000029;
          border-radius: 36px;
          height: 6vh;
          width: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          .couleur1 {
            background: #faf8e1 0% 0% no-repeat padding-box;
            width: 10%;
            height: 80%;
            border-radius: 50%;
          }
          .couleur2 {
            background: #f3c542 0% 0% no-repeat padding-box;
            width: 10%;
            height: 80%;
            border-radius: 50%;
          }
          .couleur3 {
            background: #553009 0% 0% no-repeat padding-box;
            width: 10%;
            height: 80%;
            border-radius: 50%;
          }
          .couleur4 {
            background: #210d01 0% 0% no-repeat padding-box;
            width: 10%;
            height: 80%;
            border-radius: 50%;
          }
          .couleur5 {
            background: #255062 0% 0% no-repeat padding-box;
            width: 10%;
            height: 80%;
            border-radius: 50%;
          }
          .couleur6 {
            background: #021223 0% 0% no-repeat padding-box;
            width: 10%;
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
