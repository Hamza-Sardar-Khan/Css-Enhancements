import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PortefolioPage from "../pages/PortefolioPage/PortefolioPage";

export default function NavBar() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <NavBarStyled>
      <div className="bar">
        <div className="link" onClick={() => handleClick("/")}>
          HOME
        </div>
        <div className="link" onClick={() => handleClick("portefolio")}>
          PORTEFOLIO
        </div>
        <div className="link" onClick={() => handleClick("contact")}>
          CONTACT
        </div>
        <div className="link">SHOP</div>
        <div className="link" onClick={() => handleClick("services")}>
          SERVICES
        </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  color: white;
  font-family: "Bebas Neue";
  font-size: 30px;
  .bar {
    display: flex;
    justify-content: space-around;
    width: 70%;
  }
  .link {
    cursor: pointer;
  }
`;
