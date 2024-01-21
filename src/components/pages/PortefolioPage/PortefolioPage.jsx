import React, { useState } from "react";
import styled from "styled-components";
import SectionNavBar from "../../reusable-ui/SectionNavBar";
import PortefolioProject from "./PortefolioProject";
import { useNavigate } from "react-router-dom";

export default function PortefolioPage() {
  const [backgroundTop, setBackgroundTop] = useState(null);
  const [projectStates, setProjectStates] = useState([
    { label: "GAME DESIGN", height: 122, url: "/portefolio/game-design" },
    { label: "UX / UI DESIGN", height: 122, url: "/portefolio/UiUx" },
    { label: "PRINT", height: 122, url: "/portefolio/conceptArt" },
    { label: "CONCEPT ART", height: 122, url: "/portefolio/conceptArt" },
    { label: "GALLERY", height: 122, url: "/portefolio/gallery" },
  ]);
  const [lastClickedIndex, setLastClickedIndex] = useState(null);
  const navigate = useNavigate();

  const handleBackgroundChange = (top) => {
    setBackgroundTop(top);
  };

  const handleClick = (index) => {
    const newProjectStates = projectStates.map((project, i) => ({
      ...project,
      height: i === index ? 150 : 122,
    }));

    const isSameProject = lastClickedIndex === index;

    if (isSameProject && projectStates[index].height === 150) {
      navigate(`${projectStates[index].url}`);
      return;
    }

    handleBackgroundChange(index * 19.2);

    if (isSameProject) {
      // Reset last clicked project
      newProjectStates[lastClickedIndex].height = 122;
    }

    setLastClickedIndex(index);
    setProjectStates(newProjectStates);
  };

  return (
    <PortefolioPageStyled backgroundTop={backgroundTop}>
      <SectionNavBar />
      <div className="content">
        <h1>PORTEFOLIO</h1>
        <div className="project">
          <div className="background"></div>
          {projectStates.map((project, index) => (
            <PortefolioProject
              key={index}
              label={project.label}
              height={project.height}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </PortefolioPageStyled>
  );
}

const PortefolioPageStyled = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #282828;
  color: white;
  .content {
    display: flex;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 70px;
      text-align: justify;
    }
    .project {
      border-top: 1px solid white;
      border-bottom: 1px solid white;
      position: relative;
      max-height: 638px;
      width: 80%;
      background-color: #3d3d3d;
      z-index: 1;
      overflow: hidden;
    }
  }

  .background {
    position: absolute;
    transition: all 0.4s ease-in-out;
    height: 148px;
    top: ${(props) =>
      props.backgroundTop !== null ? props.backgroundTop + "%" : "-148px"};
    width: 100%;
    background: linear-gradient(to right, #5b64b8, #c67194, #f5c390);
    z-index: -1;
  }

  @media (max-height: 790px) {
    .project {
      max-height: 538px !important;
    }
    .background {
      height: 120px;
    }
  }

  @media (max-height: 600px) {
    .project {
      max-height: 450px !important;
    }
    .background {
      height: 102px;
      top: ${(props) =>
        props.backgroundTop !== null
          ? props.backgroundTop - 2 + "%"
          : "-148px"};
    }
  }
`;
