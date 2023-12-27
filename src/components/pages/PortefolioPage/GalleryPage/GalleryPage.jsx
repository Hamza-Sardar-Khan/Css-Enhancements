import React, { useState } from "react";
import styled from "styled-components";
import ProjectNavBar from "../../../reusable-ui/ProjectNavBar";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";
import { carrousel } from "../../../Data/Carroussel";

export default function GalleryPage() {
  const [index, setIndex] = useState(0);

  const handleClick = (sens) => {
    if (sens == "left") {
      if (index != 0) {
        setIndex(index - 1);
      } else {
        setIndex(carrousel.length - 1);
      }
    } else if (sens == "right") {
      if (index == carrousel.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  return (
    <GalleryPageStyled>
      <ProjectNavBar label={"GALLERY"} />
      <div className="content">
        <div className="icons" onClick={() => handleClick("left")}>
          <FaCaretLeft />
        </div>
        <div className="picture">
          <img src={carrousel[index].imageSource} alt="" />
        </div>
        <div className="icons" onClick={() => handleClick("right")}>
          <FaCaretRight />
        </div>
      </div>
    </GalleryPageStyled>
  );
}

const GalleryPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  &::before {
    content: "";
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../../../../../public/illustration site internet/services/bacground_entreprise.png");
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    .picture {
      display: flex; /* Utilisez flexbox pour centrer l'image */
      align-items: center; /* Centre verticalement */
      justify-content: center; /* Centre horizontalement */
      height: 90%;
      width: 50%;
      img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain; /* Assurez-vous que l'image est contenue dans son conteneur */
      }
    }

    .icons {
      cursor: pointer;
      font-size: 50px;
    }
  }
`;
