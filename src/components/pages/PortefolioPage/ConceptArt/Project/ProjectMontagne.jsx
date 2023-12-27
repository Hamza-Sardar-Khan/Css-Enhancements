import React from "react";
import styled from "styled-components";
import montagne from "../../../../../../public/illustration site internet/portefolio/conceptArt/illustratioon montagne chateau.png";

export default function ProjectMontagne() {
  return (
    <ProjectMontagneStyled>
      <div className="picture">
        <img src={montagne} alt="" />
      </div>
      <div className="infos">
        <div className="description">
          <p>
            Cette illustration à été entièrement réalisée en digital painting
            comme pour la précédente. L'enjeux ici était de réaliser un paysage
            qui demande un travail de composition complètement différent du
            travail exécuté de la précédente illustration.
            <br />
            <br /> L'idée de cette composition était de la travailler sur 2
            plans, afin de pouvoir réaliser un effet de parallaxe. Cet effet
            dynamique est une tendance interactive toujours efficace dans le
            domaine de l'UI/UX design et permet d'apporter une nouvelle
            dimension aux sites web ou applications.
          </p>
        </div>
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
    </ProjectMontagneStyled>
  );
}

const ProjectMontagneStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8%;
  height: 65vh;
  width: 95%;
  background: #282828 0% 0% no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 256px;

  .picture {
    width: 40%;
    height: 60vh;
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
    width: 25%;
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
          background: #f7e8e6 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .couleur2 {
          background: #f6a794 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .couleur3 {
          background: #5c3837 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .couleur4 {
          background: #606c9c 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .couleur5 {
          background: #213a6f 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
        .couleur6 {
          background: #21173e 0% 0% no-repeat padding-box;
          width: 10%;
          height: 80%;
          border-radius: 50%;
        }
      }
    }
  }
`;
