import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../reusable-ui/SectionNavBar";
import ContactBio from "./ContactBio";
import ContactForm from "./ContactForm";
import ContactInfos from "./ContactInfos";
import logo from "../../../../public/illustration site internet/logo/Logo E-mage 2-white.png";
export default function ContactPage() {
  return (
    <ContactPageStyled>
      <SectionNavBar label="CONTACT" />
      <div className="content">
        <div className="first-line">
          <ContactInfos />
          <ContactBio />
        </div>
        <div className="picture">
          <img src={logo} alt="" />
        </div>
        <ContactForm />
      </div>
    </ContactPageStyled>
  );
}

const ContactPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #282828;
  overflow: hidden;

  .content {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3%;
    gap: 2%;

    .first-line {
      height: 17%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 15%;
    }
    .picture {
      width: 34%;
      height: 28%;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media (max-width: 1280px) {
    .first-line {
      height: 17%;
      display: flex;
      justify-content: space-evenly !important;
      align-items: center;
      gap: 0%;
    }
    .picture {
      width: 100% !important;
    }
    .picture img {
      width: 100vw;
      object-fit: contain;
    }
  }

  @media (max-width: 1024px) {
    .picture {
      height: 220px !important;
    }
    min-height: 150vh !important;
    .first-line {
      min-height: 400px !important;
      display: flex;
      justify-content: space-evenly !important;
      align-items: center;
      flex-direction: column;
      gap: 30px !important;
    }
  }
  @media (max-height: 670px) {
    height:200vh;
  }

`;
