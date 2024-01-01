import React from "react";
import styled from "styled-components";

export default function ContactForm() {
  const handleClick = (event) => {
    event.preventDefault();
  };
  return (
    <ContactFormStyled>
      <form action="submit" onClick={handleClick}></form>
      <span className="title">Contactez-moi</span>
      <input type="text" placeholder="Nom / Prenom" />
      <input type="text" placeholder="Adresse mail" />
      <textarea placeholder="Message" />
    </ContactFormStyled>
  );
}

const ContactFormStyled = styled.div`
  width: 50%;
  height: 35%;
  background: transparent
    linear-gradient(71deg, rgba(1, 18, 21, 0.71) 0%, rgba(4, 58, 72, 0.71) 100%)
    0% 0% no-repeat padding-box;
  box-shadow: inset 0px 10px 6px #58585829, 0px 10px 6px #00000029;
  border-radius: 78px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  .title {
    color: white;
    font-size: 25px;
  }
  input,
  textarea {
    width: 90%;
    height: 40px;
    background-color: transparent;
    border: 1px solid #e0d1a1;
    border-radius: 46px;
    box-sizing: border-box;
    padding-left: 20px;
    font-family: "Century Gothic";
  }
  input:active {
    border: 1px solid #e0d1a1;
  }
  textarea {
    height: 200px;
    padding-top: 10px;
  }

  @media (max-width: 1024px) {
    width: 85% !important;
    padding:0px 20px;
  }
`;
