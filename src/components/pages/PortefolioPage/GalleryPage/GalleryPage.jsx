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
        <div className="icons iconOne" onClick={() => handleClick("left")}>
          <FaCaretLeft />
        </div>
        <div className="picture">
          <img src={carrousel[index].imageSource} alt="" />
        </div>
        <div className="icons iconTwo" onClick={() => handleClick("right")}>
          <FaCaretRight />
        </div>
      </div>
    </GalleryPageStyled>
  );
}

const GalleryPageStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  color: white;
  background-image: url("../../../../../public/illustration site internet/services/bacground_entreprise.png");
  background-size: cover;
  background-repeat: no-repeat;
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
  @media (max-width: 1160px) {
    .icons {
      position: absolute;
    }
    .picture {
      width: 623px !important;
    }
    .iconOne {
      left: 2%;
      bottom: 40%;
    }
    .iconTwo {
      right: 2%;
      bottom: 40%;
    }
  }

  @media (max-width: 750px) {
    .picture {
      width: 500px !important;
    }
    .iconOne {
      left: 0.2%;
      bottom: 40%;
    }
    .iconTwo {
      right: 0.2%;
      bottom: 40%;
    }
  }
  @media (max-width: 530px) {
    .picture {
      width: 97% !important;
    }
    .iconOne {
      left: 30%;
      bottom: auto;
      top: 80%;
    }
    .iconTwo {
      right: 30%;
      bottom: auto;
      top: 80%;
    }
  }
`;
