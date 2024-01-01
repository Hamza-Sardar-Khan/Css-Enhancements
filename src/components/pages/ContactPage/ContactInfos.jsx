import React from "react";
import styled from "styled-components";
import { AiOutlineMail } from "react-icons/ai";
import { MdPhoneIphone } from "react-icons/md";
import { BsDiscord, BsInstagram } from "react-icons/bs";
import profilePicture from "../../../../public/illustration site internet/photo-profil/photo complète.png";
export default function ContactInfos() {
  return (
    <ContactInfosStyled>
      <div className="info">
        <div className="first-column">
          <span>
            <span className="logo">
              <MdPhoneIphone />
            </span>
            07.80.29.86.51
          </span>
          <span>
            <span className="logo">
              <AiOutlineMail />
            </span>
            contact@e-mage-graphic.com
          </span>
        </div>
        <div className="second-column">
          <span>
            <span className="logo">
              <BsInstagram />
            </span>
            @emage.graphic
          </span>
          <span>
            <span className="logo">
              <BsDiscord />
            </span>
            Click here
          </span>
        </div>
      </div>
    </ContactInfosStyled>
  );
}

const ContactInfosStyled = styled.div`
  width: 38%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: white;
  font-size: 20px;
  background: transparent linear-gradient(76deg, #011215 0%, #043a48 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 36px;
  .info {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 10%;

    .first-column,
    .second-column {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10%;
    }
  }
  span {
    display: flex;
    align-items: center;
    gap: 7px;
    .logo {
      color: #e0d1a1;
    }
  }

  * RESPONSIVE DESIGN BEGINS HERE */ @media (max-width:1536px) {
  }

  @media (max-width: 1280px) {
    width: 43% !important;
    min-height: 150px !important;
  }

  
  @media (max-width: 1024px) {
    width: 80% !important;
    .info{
      justify-content: space-evenly;
    }

    span{
      font-size:16px;
    }
    .logo{
      font-size: 35px;
    }
  }


  @media (max-width: 640px) {
    width: 85% !important;
    padding:0px 20px;
  }
`;
