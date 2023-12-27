import React from "react";
import styled from "styled-components";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function SectionNavBar({ label }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <SectionNavBarStyled>
      <div className="nav-container">
        <div className="link" onClick={handleClick}>
          <AiOutlineCaretLeft />
          Home
        </div>
        <div className="span">
          <span>{label}</span>
        </div>
      </div>
    </SectionNavBarStyled>
  );
}

const SectionNavBarStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: transparent;
  font-size: 30px;
  color: white;
  .nav-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 70px;

    width: 100%;
    .link {
      display: flex;
      align-items: center;
      padding-left: 10px;
      cursor: pointer;
      z-index: 1;
    }
    .span {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
    }
  }
`;
