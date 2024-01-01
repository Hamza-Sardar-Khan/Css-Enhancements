import React from "react";
import styled from "styled-components";

export default function Palette() {
  return (
    <PaletteStyled>
      <h2>PALETTE DE COULEUR</h2>
      <div className="palette">
        <div className="color1"></div>
        <div className="color2"></div>
        <div className="color3"></div>
        <div className="color4"></div>
        <div className="color5"></div>
        <div className="color6"></div>
      </div>
    </PaletteStyled>
  );
}

const PaletteStyled = styled.div`
  width: 100%;
  height: 15vh;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
  gap: 10%;
  align-items: center;
  h2 {
    text-align: center;
    font: normal normal normal 20px "Cinzel";
    letter-spacing: 0px;
    color: #e0d1a1;
  }
  .palette {
    width: 30%;
    height: 42%;
    background: rgba(40, 40, 40, 0.5) 0% 0% no-repeat padding-box;
    box-shadow: inset 0px -7px 8px #00000029;
    border-radius: 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .color1,
    .color2,
    .color3,
    .color4,
    .color5,
    .color6 {
      width: 9%;
      height: 67%;
      border-radius: 50%;
    }
    .color1 {
      background: #e0d1a1 0% 0% no-repeat padding-box;
    }
    .color2 {
      background: #af383d 0% 0% no-repeat padding-box;
    }
    .color3 {
      background: #484d53 0% 0% no-repeat padding-box;
    }
    .color4 {
      background: #a7481b 0% 0% no-repeat padding-box;
    }
    .color5 {
      background: #8b810c 0% 0% no-repeat padding-box;
    }
    .color6 {
      background: #203813 0% 0% no-repeat padding-box;
    }
  }

  @media (max-width: 1536px) {
    .palette{
      width:400px !important ;
    }
  }

  @media (max-width: 640px) {

    .palette{
      width:90% !important ;
    }

  }
`;
