import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../../../reusable-ui/SectionNavBar";
import ServicesFooter from "../../../../reusable-ui/ServicesFooter";
import FirstPartParticulier from "./FirstPartParticulier";
import SecondPartParticulier from "./SecondPartParticulier";
import ThirdPartParticulier from "./ThirdPartParticulier";
import { useNavigate } from "react-router-dom";

export default function ParticulierPage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <ParticulierPageStyled>
      <SectionNavBar />
      <h1>SERVICES</h1>
      <div className="content main-content">
        <FirstPartParticulier />
        <SecondPartParticulier />
        <ThirdPartParticulier />
      </div>
      <div className="footer">
        <ServicesFooter />
      </div>
      <div className="nav">
        <div
          className="influenceur"
          onClick={() => handleClick("../services/influenceur")}
        >
          <p>Influenceur</p>
        </div>
        <div
          className="entreprise"
          onClick={() => handleClick("../services/entreprise")}
        >
          <p>Entreprise</p>
        </div>
      </div>
    </ParticulierPageStyled>
  );
}

const ParticulierPageStyled = styled.div`
  min-height: 100vh;
  width: 100%;
  color: white;
  background-image: url("../../../../public/illustration site internet/services/bacground_entreprise.png");
  background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 30px;

  h1 {
    font-size: 70px;
    font-weight: 300;
    text-align: center;
  }
  .content {
    padding-left: 5%;
  }
  .main-content {
    min-height: 843px;
    position: relative;
  }
  .footer {
    display: flex;
    justify-content: center;
  }
  .nav {
    width: 13%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 3%;
    left: 5%;
    p {
      transform: matrix(0.74, -0.67, 0.67, 0.74, 0, 0);
      text-align: justify;
      font: normal normal bold 14px/17px Century Gothic;
    }
    .entreprise {
      width: 36%;
      height: 100%;
      background: transparent
        linear-gradient(45deg, #0f0f6b 0%, #28bec3 87%, #28c0c5 100%) 0% 0%
        no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .influenceur {
      width: 36%;
      height: 100%;
      background: transparent
        linear-gradient(
          225deg,
          #5c0f6b 0%,
          #9346b4d6 15%,
          #2dd8de 87%,
          #11f7ff 100%
        )
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }

  @media (max-width: 1736px) {
    .footer {
      position: relative;
    }
  }

  @media (max-width: 1536px) {
    .nav {
      width: 200px;
      height: 80px;
      position: absolute;
      bottom: 3%;
      p {
        font-size: 13px;
      }
      .entreprise,
      .influenceur {
        width: 80px !important;
        height: 80px !important;
      }
    }
  }

  /* RESPONSIVE DESIGN BEGINS HERE */
  @media (max-width: 1024px) {
    .content {
      padding-left: 2%;
    }
  }

  @media (max-width: 860px) {
    position: relative;
    .main-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: column;
      gap: 130px;
    }

    .nav {
      height: 100px;
      position: relative;
      padding-top: 20px;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 40px;
  }

  @media (min-height: 1023px) {
    min-height: 172vh;
  }

  @media (min-height: 1179px) {
    min-height: 162vh;
  }
  @media (min-height: 1365px) {
    min-height: 122vh;
    .nav {
      position: relative;
      height: 100px;
    }
  }
`;
