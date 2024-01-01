import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function NavBarEntreprise() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <NavBarEntrepriseStyled>
      <div
        className="influenceur"
        onClick={() => handleClick("../services/influenceur")}
      >
        <p>Influenceur</p>
      </div>
      <div
        className="particulier"
        onClick={() => handleClick("../services/particulier")}
      >
        <p>Particulier</p>
      </div>
    </NavBarEntrepriseStyled>
  );
}

const NavBarEntrepriseStyled = styled.div`
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
    font: normal normal bold 0.97vw Century Gothic;
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
  .particulier {
    width: 36%;
    height: 100%;
    background: transparent linear-gradient(226deg, #d6c428 0%, #8021a8 90%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  @media (max-width: 1536px) {
    width: 200px;
    height: 80px;
    position: absolute;
    bottom: 3%;
    p {
      font-size: 13px;
    }
    .influenceur,
    .particulier {
      width: 80px;
    }
  }

`;
