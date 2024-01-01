import React from "react";
import styled from "styled-components";

export default function ContactBio() {
  return (
    <ContactBioStyled>
      <p>
        Je m'appelle Tanguy, et je suis un graphiste expérimenté passionné par
        la création visuelle. Au fil des années, j'ai eu le privilège de
        travailler sur une variété de projets créatifs, allant de l'identité de
        marque à la conception d'interfaces utilisateur, en passant par
        l'illustration et la conception d'imprimés. Mon parcours professionnel
        m'a permis de développer des compétences variées et de travailler avec
        divers clients. <br />
        <br />
        Si vous avez un projet créatif en tête, que ce soit une refonte de site
        web, la création d'une identité de marque, ou tout autre besoin en
        design, je serais ravi de discuter de la manière dont je peux vous aider
        à le concrétiser. N'hésitez pas à me contacter pour discuter de vos
        besoins et de votre vision.
      </p>
    </ContactBioStyled>
  );
}

const ContactBioStyled = styled.div`
  width: 38%;
  height: 100%;
  background: transparent
    linear-gradient(76deg, rgba(1, 18, 21, 0.71) 0%, rgba(4, 58, 72, 0.71) 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 90%;
    color: white;
    font-family: "Century Gothic";
    font-size: 10px;
  }

  
  @media (max-width: 1280px) {
    width: 43% !important;
    min-height: 150px !important;
 
  }

  
  @media (max-width: 1024px) {
    width: 80% !important;

  }

  
  @media (max-width: 640px) {
    width: 85% !important;
    padding:0px 20px;
  }
`;
