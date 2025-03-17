import React, { useState } from "react";
import styled from "styled-components";
//import rainyImage from "../assets/rainy.jpg"; // <-- adjust based on your folder structure
import { useNavigate } from "react-router";
import ButtonX from "./ButtonX";
import Tooltip from "./HtmlLogo";

const DisplayCard = ({ template, setSelectedTemplate }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/send-email");
    setSelectedTemplate(template);
  };

  return (
    <div onClick={handleClick}>
      <StyledWrapper
        $background={template.bookImage}
        $isHovered={isHovered} // <-- Pass hover state to styled component
      >
        <div
          className="book"
          style={{
            backgroundImage: `url(${template.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
            marginBottom: "2rem",
          }}
        >
          <div
            className="cover"
            style={{
              backgroundImage: `url(${template.bookImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </StyledWrapper>
      <div className="btns">
        <div className="flexText">
          <h5>{template.title}</h5>

          <ButtonX
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            handleClick={handleClick}
            buttonText={"Send Now"}
          />
        </div>

        <div
          className="htmlLogo"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
            alt="HTML Logo"
            style={{
              width: "20px",
              height: "20px",
              objectFit: "contain",
            }}
          />
          <p>↑</p>
        </div>
      </div>
    </div>
  );
};

const StyledWrapper = styled.div`
  .book {
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: cover;
    position: relative;
    border-radius: 10px;
    width: 400px;
    height: 500px;
    background-color: whitesmoke;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    -webkit-transform: preserve-3d;
    -ms-transform: preserve-3d;
    transform: preserve-3d;
    -webkit-perspective: 2000px;
    perspective: 2000px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #000;
  }

  .cover {
    background-image: url(${(props) => props.background});
    background-position: center;
    background-size: cover;
    top: 0;
    transform: ${(props) =>
      props.$isHovered ? "rotateY(-80deg)" : "rotateY(0deg)"};
    transition: all 0.5s;
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    cursor: pointer;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform-origin: 0;
    -ms-transform-origin: 0;
    transform-origin: 0;
    -webkit-box-shadow: 1px 1px 12px #000;
    box-shadow: 1px 1px 12px #000;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }
  .htmlLogo {
    cursor: pointer;
  }

  p {
    font-size: 20px;
    font-weight: bolder;
  }
`;

export default DisplayCard;
