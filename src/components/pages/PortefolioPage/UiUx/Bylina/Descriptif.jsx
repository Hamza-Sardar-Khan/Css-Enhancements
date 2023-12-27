import React from "react";
import styled from "styled-components";
import logo from "../../../../../../public/illustration site internet/portefolio/UxUI/bylyna_logo relief good version.png";
import illustration from "../../../../../../public/illustration site internet/portefolio/UxUI/307222235_836797087328340_8992784478473000667_n.jpg";
import BlueSquare from "./BlueSquare";

export default function Descriptif() {
  return (
    <DescriptifStyled>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <p>
        En tant que web designer, ma première incursion significative dans le
        domaine de l'UX-UI a été la refonte complète de la page d'accueil du
        site de prêt-à-porter féminin, Bylyna. Ce projet a été une opportunité
        passionnante de fusionner l'esthétique contemporaine avec une expérience
        utilisateur exceptionnelle.
        <br />
        <br /> La demande était simple proposer une maquette épurée et
        minimaliste. Voici un petit aperçu de ce à quoi ressemblait l'ancienne
        version du site sur téléphone :
      </p>

      <div className="bottom">
        <div className="picture">
          <img src={illustration} alt="" />
        </div>
        <p>
          En somme, beaucoup de textes; une page d'accueil qui ne présentait pas
          les produits du site, uniquement les catégories, à moins de scroller
          plus bas encore et d'être cette fois-ci inondés d'articles venant de
          toutes catégories confondues. L'expérience utilisateur en était
          forcément impactée. Voici donc les deux propositions réalisées à
          l'époque sur photoshop. La deuxième reprenant les couleurs initales du
          site.
        </p>
      </div>
    </DescriptifStyled>
  );
}

const DescriptifStyled = styled.div`
  width: 23%;
  height: 90%;
  background: transparent linear-gradient(35deg, #011215 0%, #043a48 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2%;
  .logo {
    margin-top: 1%;
    width: 20%;
    height: 12%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    width: 90%;
    text-align: left;
    font: normal normal normal 10px Century Gothic;
    letter-spacing: 0px;
    color: #ffffff;
  }

  .bottom {
    width: 90%;
    height: 55%;
    display: flex;
    align-items: center;
    .picture {
      width: 45%;
      height: 100%;
      display: flex;
      align-items: center;
      img {
        width: 80%;
        height: 100%;
      }
    }
    p {
      width: 60%;
      text-align: left;
      font: normal normal normal 10px Century Gothic;
      letter-spacing: 0px;
      color: #ffffff;
    }
  }
`;
