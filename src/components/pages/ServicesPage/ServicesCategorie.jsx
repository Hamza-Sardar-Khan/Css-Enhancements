import React from "react";
import styled from "styled-components";
import { IoBusinessOutline } from "react-icons/io5";
import { FaRegHandshake } from "react-icons/fa";
import influenceur from "../../../../public/illustration site internet/services/influenceurs mes copuilles.png";
import { useNavigate } from "react-router-dom";

export default function ServicesCategorie() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };
  return (
    <ServicesCategorieStyled>
      <div
        className="entreprise"
        onClick={() => handleClick("/services/entreprise")}
      >
        <p>UNE ENTREPRISE</p>
        <div className="icon-business">
          <IoBusinessOutline />
        </div>
      </div>
      <div
        className="influenceur"
        onClick={() => handleClick("/services/influenceur")}
      >
        <p>
          INFLUENCEUR
          <br />
          YOUTUBEURbr
          <br />
          STREAMER
        </p>
        <img src={influenceur} alt="" />
      </div>
      <div
        className="particulier"
        onClick={() => handleClick("/services/particulier")}
      >
        <p>UN PARTICULIER</p>
        <div className="icon-business">
          <FaRegHandshake />
        </div>
      </div>
    </ServicesCategorieStyled>
  );
}

const ServicesCategorieStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 120px;
  height: 31vh;
  width: 100%;

  .entreprise {
    cursor: pointer;
    width: 15%;
    height: 31vh;
    background: transparent
      linear-gradient(45deg, #0f0f6b 0%, #28bec3 87%, #28c0c5 100%) 0% 0%
      no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    p {
      font-size: 25px;
    }
    .icon-business {
      height: 150px;
      font-size: 150px;
    }
  }

  .influenceur {
    cursor: pointer;
    width: 15%;
    height: 31vh;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    p {
      text-align: center;
      letter-spacing: 0px;
      font-size: 23px;
    }
    img {
      width: 53%;
      height: 48%;
    }
  }
  .particulier {
    cursor: pointer;
    width: 15%;
    height: 31vh;

    background: transparent linear-gradient(226deg, #d6c428 0%, #8021a8 90%) 0%
      0% no-repeat padding-box;
    box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    p {
      font-size: 25px;
    }
    .icon-business {
      height: 150px;
      font-size: 150px;
    }
  }
`;
