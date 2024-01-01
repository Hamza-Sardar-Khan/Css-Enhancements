import React from "react";
import styled from "styled-components";
import A1 from "../../../../../public/illustration site internet/portefolio/UxUI/maquette_BYLYNA_1.png";
import A2 from "../../../../../public/illustration site internet/portefolio/UxUI/maquette_BYLYNA_2.png";
import Descriptif from "./Bylina/Descriptif";
import BlueSquareFile from "./Bylina/BlueSquareFile";
import printemps from "../../../../../public/illustration site internet/portefolio/UxUI/printemps_2023.png";
import ete from "../../../../../public/illustration site internet/portefolio/UxUI/ETE 2023 BY LYNA V4.png";
import automne from "../../../../../public/illustration site internet/portefolio/UxUI/automne_2022-4_1080p.png";
import maquette from "../../../../../public/illustration site internet/portefolio/UxUI/maquette_BYLYNA_2.png";

import { FaCaretDown } from "react-icons/fa";

export default function Bylina() {
  return (
    <BylinaStyled>
      <div className="first-part">
        <div className="title">
          <h1>BYLYNA</h1>
        </div>
        <div className="picture-vertical">
          <img src={A1} alt="" />
        </div>
        <Descriptif />
        <div className="picture-vertical">
          <img src={A2} alt="" />
        </div>
      </div>
      <div className="second-part">
        <div className="picture-horizontale">
          <img src={printemps} alt="" />
          <img src={ete} alt="" />
          <img src={automne} alt="" />
        </div>
        <div className="result">
          <div className="square" id="square1">
            <p>
              Réjouie de la proposition nous sommes passés à l'intégration sur
              Prestashop. Voici à droite le résultat du site. Prestashop
              fonctionne par module, comme beaucoup de CMS et ne permet pas une
              totale liberté dans la conception d'un site internet. Néanmoins
              j'ai réussi à faire en sorte que le résultat soit quasi fidèle à
              la maquette proposée.
            </p>
          </div>
          <div className="square" id="square2">
            <p>
              J'ai également réalisé différents visuels pour coller avec les
              nouvelles collections souvent associées aux différentes
              saisonnalités. Ces changements d'ambiances permettent de faire
              vivre le site en mettant toujours en avant quelques produits
              phares de la boutique.
            </p>
          </div>
          <div className="square" id="square3">
            <p>
              Enfin plus récemment, By Lyna a fait peau neuve à nouveau. Cette
              fois-ci dans des tons roses et noirs, pour un style chic et
              "girly", personnellement j'adore. Ici pas de changements de
              structure, simplement une réactualisation du style.
            </p>
            <div className="icons">
              <FaCaretDown />
            </div>
          </div>
        </div>
        <div className="picture-vertical">
          <img src={maquette} alt="" />
        </div>
        <div className="title second-title">
          <h1>BYLYNA</h1>
        </div>
      </div>

      <BlueSquareFile />
    </BylinaStyled>
  );
}

const BylinaStyled = styled.div`
  width: 100%;
  height: 36%;
  margin-top: 2%;
  h1 {
    writing-mode: vertical-rl;
    text-orientation: upright;
    text-align: center;
    font: normal normal normal 80px "Century Gothic", sans-serif;
    letter-spacing: 0px;
    color: #ffffff;
    text-shadow: 3px 3px 10px #ffffff;
  }
  .picture-vertical {
    width: 20%;
    height: 90%;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .first-part {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding-left: 3%;
    gap: 5%;
  }

  .second-part {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    box-sizing: border-box;
    gap: 5%;
    .picture-horizontale {
      width: 20%;
      height: 90%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 3%;
      img {
        width: 100%;
        height: 28%;
      }
    }
    .result {
      width: 23%;
      height: 90%;
      display: flex;
      flex-direction: column;
      gap: 10%;
      justify-content: center;
      .square {
        width: 100%;
        height: 18%;
        background: transparent linear-gradient(70deg, #011215 0%, #043a48 100%)
          0% 0% no-repeat padding-box;
        box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        p {
          width: 90%;
          text-align: left;
          font: normal normal normal 13px Century Gothic;
          letter-spacing: 0px;
          color: #ffffff;
        }
      }
      #square1 {
        height: 25%;
      }
      #square3 {
        display: flex;
        flex-direction: column;
        .icons {
          font-size: 15px;
          color: white;
        }
        p {
          text-align: center;
        }
      }
    }
  }

  /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1536px) {
    .first-part,
    .second-part {
      justify-content: space-evenly;
    }
    .second-part {
      padding-left: 3%;
    }
  }

  @media (max-width: 1280px) {
    .first-part,
    .second-part {
      padding-left: 0%;
    }

    .picture-vertical {
      width: 24%;
      height: 94%;
    }

    .second-part .result {
      width: 26%;
    }

    .second-part .picture-horizontale {
      width: 23%;
    }
    .square {
      padding: 10px 0px;
    }
  }

  @media (max-width: 1024px) {
    position: relative;
    padding-top: 10%;
    .second-title {
      display: none;
    }
    .title {
      position: absolute;
      top: 0%;
    }
    .title h1 {
      writing-mode: horizontal-tb;
    }

    .second-part .result {
      width: 40%;
    }
  }

  @media (max-width: 660px) {
    padding-top: 18%;

    height: auto;
    min-height: 36%;
    .first-part,
    .second-part {
      flex-direction: column;
    }
    .picture-vertical,
    .second-part .picture-horizontale {
      width: 54%;
      height: 94%;
    }

    .second-part .result {
      width: 90%;
    }
    .second-part .result .square {
     margin-top: 10px;
  }
  }

  @media (max-width: 490px) {
    padding-top: 25%;
    .picture-vertical,
    .second-part .picture-horizontale {
      width: 84%;
      height: 94%;
    }
  }
`;
