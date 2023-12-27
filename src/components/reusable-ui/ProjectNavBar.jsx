import React from "react";
import styled from "styled-components";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function ProjectNavBar({ label }) {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <ProjectNavBarStyled>
      <div className="link" onClick={() => handleClick("/portefolio")}>
        <AiOutlineCaretLeft />
        BACK
      </div>
      <div className="span">
        <span>{label}</span>
      </div>
      <div className="link" onClick={() => handleClick("/")}>
        <span>HOME</span>
      </div>
    </ProjectNavBarStyled>
  );
}

const ProjectNavBarStyled = styled.div`
  max-width: 100%;

  height: 150px;
  background-color: transparent;
  font-size: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;

  .link {
    display: flex;
    cursor: pointer;
    width: 10%;
    height: 30%;
    z-index: 1;
    align-items: center;

    span {
      text-align: right;
      width: 90%;
    }
  }
  .span {
    font-size: 100px;
  }
`;
