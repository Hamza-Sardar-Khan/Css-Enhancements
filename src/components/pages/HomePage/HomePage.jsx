import React from "react";
import styled from "styled-components";
import videoBackground from "../../../../public/illustration site internet/vidéos/3d-motion-graphic-background-glowing-lines-abstrac-2022-01-31-03-02-39-utc.mp4";
import NavBar from "../../reusable-ui/NavBar";
import logo from "../../../../public/illustration site internet/logo/Logo E-mage 2-white.png";
export default function HomePage() {
  return (
    <HomePageStyled>
      <div className="background">
        <video autoPlay loop muted src={videoBackground} />
        <NavBar />
        <div className="logo">
          <img src={logo} alt="Logo E-mage" />
          <p>GET STARTED</p>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.div`
  height: 100vh;

  .background {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .background video {
    position: absolute;
    min-width: 100%;
    min-height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -100;
  }

  .logo {
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    color: #707070;
    gap: 64px;
    img {
      width: 40%;
      height: 40%;
    }
  }
`;
