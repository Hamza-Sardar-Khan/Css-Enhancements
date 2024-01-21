import React from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";
import UiUxDescription from "./UiUxDescription";
import TitleUiUx from "./TitleUiUx";
import Bylina from "./Bylina";
import baniere from "../../../../../public/illustration site internet/portefolio/UxUI/mock up.png";

export default function UiUxPage() {
  return (
    <UiUxPageStyled>
      <ProjectNavBar label={"UX / UI DESIGN"} />
      <UiUxDescription />
      <TitleUiUx />
      <Bylina />
      <div className="banniere">
        <img src={baniere} alt="" />
      </div>
    </UiUxPageStyled>
  );
}

const UiUxPageStyled = styled.div`
  width: 100%;
  height: 400vh;

  &::before {
    content: "";
    height: 415vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../../public/illustration site internet/portefolio/UxUI/background.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .banniere {
    margin-top: 2%;
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 660px) {
    background-image: url("../../../../../public/illustration site internet/portefolio/UxUI/background.png");
    min-height: 400vh;
    height: auto;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    &::before{
      display:none;
        }
    
  }
`;
