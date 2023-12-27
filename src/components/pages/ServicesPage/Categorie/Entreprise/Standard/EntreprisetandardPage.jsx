import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../../../../reusable-ui/SectionNavBar";
import ServicesFooter from "../../../../../reusable-ui/ServicesFooter";
import NavBarEntreprise from "../NavBarEntreprise";
import TitleEntreprise from "../TitleEntreprise";
import TransparentSquare from "../../../../../reusable-ui/TransparentSquare";

export default function EntrepriseStandardPage() {
  return (
    <EntrepriseStandardPageStyled>
      <SectionNavBar />
      <h1>SERVICES</h1>
      <div className="title">
        <TitleEntreprise />
      </div>
      <div className="main">
        <h1>STANDARD</h1>
        <h5>2 Visuels par semaine</h5>
        <p>
          Découvrez l'abonnement standard, conçu pour ceux qui recherchent un
          niveau supérieur de design graphique et de support. Avec des
          fonctionnalités étendues, cet abonnement offre une solution complète
          pour répondre à vos besoins marketing et visuels.
          <br />
          <br />
          L'abonnement standard élève votre expérience de design avec des
          services graphiques plus avancés de l'abonnement basic. Vous avez
          maintenant la possibilité de demander la création de supports
          marketing percutants tels que des flyers et des brochures par exemple.
          Que vous ayez une campagne marketing en tête ou que vous souhaitiez
          promouvoir vos produits et services de manière professionnelle, je
          suis prêt à donner vie à vos idées. <br />
          <br /> Avec jusqu'à cinq révisions incluses, je m'engages à
          perfectionner chaque détail de votre design pour vous assurer une
          entière satisfaction. mon processus itératif garantit que le résultat
          final dépasse vos attentes, vous permettant de bénéficier d'un design
          qui reflète parfaitement votre vision. <br />
          <br /> Votre expérience est désormais renforcée par un support étendu.
          En plus du support par e-mail et par chat, je met également une ligne
          téléphonique directe pour répondre à vos questions de manière plus
          immédiate. Mon engagement envers votre satisfaction est renforcé par
          des délais de livraison plus rapides, vous permettant de recevoir vos
          créations dans les délais les plus courts. <br />
          <br /> Le prix mensuel de cet abonnement standard est de 449€ TTC.
          Avec cette offre, vous accédez à un niveau supérieur de design
          graphique, de support et de réactivité, le tout à un tarif compétitif.
          Faites passer votre présence visuelle au niveau suivant avec cet
          abonnement standard dès aujourd'hui.
        </p>
      </div>
      <div className="footer">
        <ServicesFooter />
      </div>
      <NavBarEntreprise />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"13%"}
        left={"70%"}
      />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"81%"}
        left={"70%"}
      />
      <TransparentSquare
        width={"150px"}
        height={"100px"}
        top={"40%"}
        left={"17%"}
      />
    </EntrepriseStandardPageStyled>
  );
}

const EntrepriseStandardPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  color: white;

  &::before {
    content: "";
    height: 100vh;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../public/illustration site internet/services/bacground_entreprise.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  h1 {
    font-size: 4.86vw;
    font-weight: 300;
    text-align: center;
  }
  .title {
    width: 16.5%;
    height: 12.5%;
    padding-left: 7%;
    display: flex;
    justify-content: flex-start;
  }
  .main {
    width: 48%;
    height: 75%;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent linear-gradient(47deg, #82d3dc 0%, #b9eef3 100%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    color: #2b2b2b;
    h1 {
      font: normal normal normal 5.34vw Bebas Neue;
    }
    h5 {
      font: normal normal bold 1.87vw Century Gothic;
      padding-bottom: 3%;
    }
    p {
      width: 80%;
      font: normal normal normal 0.69vw Century Gothic;
      text-align: justify;
    }
  }
  .footer {
    display: flex;
    justify-content: center;
  }
`;
