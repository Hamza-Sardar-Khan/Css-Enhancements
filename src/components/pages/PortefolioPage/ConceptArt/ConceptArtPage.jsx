import React from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";
import ProjectTerreACiel from "./Project/ProjectTerreACiel";
import ProjectDragon from "./Project/ProjectDragon";
import ProjectMontagne from "./Project/ProjectMontagne";
import ProjectCorniche from "./Project/ProjectCorniche";
import background from "../../../../../public/illustration site internet/portefolio/conceptArt/ConceptArtBackground.png";
export default function ConceptArtPage() {
  return (
    <ConceptArtPageStyled>
      <div className="background-image">
        <ProjectNavBar label={"Concept Art"} />
        <div className="project">
          <ProjectTerreACiel />
          <ProjectDragon />
          <ProjectMontagne />
          <ProjectCorniche />
        </div>
      </div>
    </ConceptArtPageStyled>
  );
}

const ConceptArtPageStyled = styled.div`
  height: 400vh;
  width: 100%;

  &::before {
    content: "";
    height: 400vh;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../../public/illustration site internet/portefolio/conceptArt/ConceptArtBackground.png");
    background-size: cover;
    background-repeat: repeat;
    z-index: -1;
  }
  .project {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 40vh;
  }
`;
