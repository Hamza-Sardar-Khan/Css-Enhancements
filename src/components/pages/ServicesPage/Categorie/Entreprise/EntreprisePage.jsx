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
      <div className="content main-content">
        <FirstPart />
        <SecondPart />
        <ThirdPart />
      </div>
      <div className="footer">
        <ServicesFooter />
      </div>
      <div className="nav">
        <NavBarEntreprise />
      </div>
    </EntreprisePageStyled>
  );
}

const EntreprisePageStyled = styled.div`
  width: 100%;
  
  color: white;

  &::before {
    content: "";
    min-height: 110vh;
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

  /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1024px) {
    .content {
      padding-left: 2%;
    }
  }

  @media (max-width: 860px) {
    padding-bottom: 150px;
    position: relative;
    .main-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 130px;
    }
    .nav {
      position: relative;
      width: 100%;
      height: 100%;
      padding-top: 100px;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }

  @media (max-height: 600px) {
    &::before {
      min-height: 150vh;
    }
  }

  
  @media (min-height: 1024px) {
    min-height: 142vh;
  }
`;
