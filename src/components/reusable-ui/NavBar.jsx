import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
export default function NavBar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClick = (path) => {
    navigate(path);
  };
  function horizontalBar() {
    if (show) {
      setShow(false);
      console.log("show");
    } else {
      setShow(true);
      console.log("Hide");
    }
  }

  return (
    <NavBarStyled show={show} className={`${show ? "show" : "hide"}`}>
      <div className="bar">
        <div className="link" onClick={() => handleClick("/")}>
          HOME
        </div>
        <div className="link" onClick={() => handleClick("portefolio")}>
          PORTEFOLIO
        </div>
        <div className="link" onClick={() => handleClick("contact")}>
          CONTACT
        </div>
        <div className="link">SHOP</div>
        <div className="link" onClick={() => handleClick("services")}>
          SERVICES
        </div>
      </div>

      <div className="logo" onClick={() => horizontalBar()}>
        {!show ? <FaBars /> : <IoClose />}
        <div className="bar2">
        <div className="link" onClick={() => handleClick("/")}>
          HOME
        </div>
        <div className="link" onClick={() => handleClick("portefolio")}>
          PORTEFOLIO
        </div>
        <div className="link" onClick={() => handleClick("contact")}>
          CONTACT
        </div>
        <div className="link">SHOP</div>
        <div className="link" onClick={() => handleClick("services")}>
          SERVICES
        </div>
      </div>
      </div>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.show ? "rgba(255, 255, 255, 0.8);" : "rgba(255, 255, 255, 0.3);"};
  color: white;
  font-family: "Bebas Neue";
  font-size: 30px;
  transition: all 0.3s;

  .bar {
    display: flex;
    justify-content: space-around;
    width: 70%;
  }
  .link {
    cursor: pointer;
  }
  .logo {
    color: ${(props) => (!props.show ? "white" : "black")} !important;

    display: none !important;
  }

  @media (max-width: 640px) {
    position: absolute;
    overflow: hidden;
    height: ${(props) =>
      props.show ? "100vh" : "70px"}; // Adjusted height for mobile view

    .bar {
      display: none;
    }
    .logo {
      display: block !important;
      position: absolute;
      right: -11%;
      top: ${(props) => (props.show ? "5%" : "30%")};
      transition: all 0.5s;
    }

    .bar2{
      position: relative;
    left: -50vw;
    top: 20%;
    color:black;
    }
  }
`;
