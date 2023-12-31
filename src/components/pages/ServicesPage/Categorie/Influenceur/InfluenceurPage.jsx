import React from "react";
import styled from "styled-components";
import SectionNavBar from "../../../../reusable-ui/SectionNavBar";
import ServicesFooter from "../../../../reusable-ui/ServicesFooter";
import FirstPartInfluenceur from "./FirstPartInfluenceur";
import SecondPartInfluenceur from "./SecondPartInfluenceur";
import ThirdPartInfluenceur from "./ThirdPartInfluenceur";
import { useNavigate } from "react-router-dom";

export default function InfluenceurPage() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <InfluenceurPageStyled>
      <SectionNavBar />
      <h1>SERVICES</h1>
      <div className="content main-content">
        <FirstPartInfluenceur />
        <SecondPartInfluenceur />
        <ThirdPartInfluenceur />
      </div>
      <div className="footer">
        <ServicesFooter />
      </div>
      <div className="nav">
        <div
          className="entreprise"
          onClick={() => handleClick("../services/entreprise")}
        >
          <p>Entreprise</p>
        </div>
        <div
          className="particulier"
          onClick={() => handleClick("../services/particulier")}
        >
          <p>Particulier</p>
        </div>
      </div>
    </InfluenceurPageStyled>
  );
}

const InfluenceurPageStyled = styled.div`
  min-height: 100vh;
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
        linear-gradient(
          40deg,
          #0f0f6b 0%,
          #0f0f6b 16%,
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
    .particulier {
      width: 36%;
      height: 100%;
      background: transparent linear-gradient(226deg, #d6c428 0%, #8021a8 90%)
        0% 0% no-repeat padding-box;
      box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
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
      .particulier {
        
        width: 80px;
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
      height:100px;
      position: relative;
      padding-top: 100px;
      .entreprise,
      .particulier {
        width: 80px;
        height:100px;
      }
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
    .nav{
      padding-top: 40px;
    }
  }
`;
