import React from "react";
import styled from "styled-components";
import { BsCart4 } from "react-icons/bs";

export default function ChooseButton({ className, right, top, left, onClick }) {
  return (
    <ChooseButtonStyled
      right={right}
      top={top}
      left={left}
      onClick={onClick}
      className={className}
    >
      <div className="content">
        {right ? (
          <>
            <p>
              <span>Choisir</span> cette option
            </p>
            <div className="cart">
              <BsCart4 />
            </div>
          </>
        ) : (
          <>
            <div className="cart">
              <BsCart4 />
            </div>
            <p>
              <span>Choisir</span> cette option
            </p>
          </>
        )}
      </div>
    </ChooseButtonStyled>
  );
}

const ChooseButtonStyled = styled.div`
  position: relative;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 35%;
  height: 70px;
  background: #00f6ff 0% 0% no-repeat padding-box;
  border-radius: 22px;
  .content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props) => (props.right ? "center" : "flex-start")};
    align-items: center;
    gap: 15%;
    padding-left: ${(props) => (props.right ? null : "10%")};
    p {
      display: flex;
      flex-direction: column;
      font-size: 1.11vw;
    }
    .cart {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #282828;
      font-size: 1.4vw;
    }
  }

  @media (max-width: 1536px) {
    .content p {
      display: flex;
      flex-direction: column;
      font-size: 16px;
    }

    .content .cart {
      font-size: 26px;
    }
  }
`;
