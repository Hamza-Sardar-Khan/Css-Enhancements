import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../../../reusable-ui/SectionNavBar";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart";
import ThirdPart from "./ThirdPart";
import ServicesFooter from "../../../../reusable-ui/ServicesFooter";
import NavBarEntreprise from "./NavBarEntreprise";

export default function EntreprisePage() {
  return (
    <EntreprisePageStyled>
      <SectionNavBar />
      <h1>SERVICES</h1>
      <div className="content">
        <FirstPart />
        <SecondPart />
        <ThirdPart />
      </div>
      <div className="footer">
        <ServicesFooter />
      </div>
      <NavBarEntreprise />
    </EntreprisePageStyled>
  );
}

const EntreprisePageStyled = styled.div`
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
    font-size: 70px;
    font-weight: 300;
    text-align: center;
  }
  .content {
    padding-left: 5%;
  }
  .footer {
    display: flex;
    justify-content: center;
  }
`;
