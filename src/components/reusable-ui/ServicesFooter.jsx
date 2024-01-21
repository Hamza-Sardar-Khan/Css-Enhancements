import React from "react";
import styled from "styled-components";

export default function ServicesFooter() {
  return (
    <ServicesFooterStyled>
      <p>
        Pour toute demande spécifique, pour une demande de devis, pour me parler
        d'un projet, contactez moi.
      </p>
    </ServicesFooterStyled>
  );
}

const ServicesFooterStyled = styled.div`
  position: absolute;
  justify-content: center;
  bottom: 3%;
  border-top: 1px solid #e0d1a1;
  border-bottom: 1px solid #e0d1a1;
  padding: 5px;
  p {
    font: normal normal normal 1.04vw Century Gothic;
    letter-spacing: 0px;
  }

  @media (max-width: 1536px) {
    bottom:2%;
    p {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 1124px) {
    position: relative;
    bottom: 0;
    margin-top: 50px;
    p {
      font-size: 1rem;
    }
  }
`;
