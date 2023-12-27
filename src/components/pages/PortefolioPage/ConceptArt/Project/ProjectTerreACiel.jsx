import React from "react";
import styled from "styled-components";
import terreSansCiel from "../../../../../../public/illustration site internet/portefolio/conceptArt/la_terre_a_ciel_ouvert.jpg";

export default function ProjectTerreACiel() {
  return (
    <ProjectTerreACielStyled>
      <div className="picture">
        <img src={terreSansCiel} alt="" />
      </div>
      <div className="infos">
        <div className="description">
          <p>
            Cette première illustration pour le site internet la terre à ciel
            ouvert est une composition réalisée entièrement sur photoshop avec
            une utilisation en majeur partie de la technique de photobashing. Le
            photobashing est une technique qui consiste à combiner, mélanger ou
            superposer des éléments photographiques existants (photographies ou
            textures) pour créer une nouvelle image ou une composition
            artistique.
          </p>
        </div>
        <div className="palette">
          <span>Palette de couleur</span>
          <div className="couleur">
            <div className="white"></div>
            <div className="yellow"></div>
            <div className="brown"></div>
            <div className="brown2"></div>
            <div className="blue"></div>
            <div className="blue2"></div>
          </div>
        </div>
      </div>
    </ProjectTerreACielStyled>
  );
}

const ProjectTerreACielStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5%;
  height: 65vh;
  width: 95%;
  background: #282828 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 256px;

  .picture {
    width: 35%;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
      height: 60%;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    height: 60%;
    p {
      text-align: justify;
      font: normal normal normal 12px/15px Century Gothic;
      letter-spacing: 0px;
      color: #ffffff;
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
      .couleur {
        background: #282828 0% 0% no-repeat padding-box;
        box-shadow: inset 0px -7px 8px #00000029;
        border-radius: 36px;
        height: 6vh;
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .white {
          background: #faf8e1 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .yellow {
          background: #f3c542 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .brown {
          background: #553009 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .brown2 {
          background: #210d01 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .blue {
          background: #255062 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .blue2 {
          background: #021223 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
      }
    }
  }
`;
