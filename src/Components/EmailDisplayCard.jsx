import React from "react";
import styled from "styled-components";
import rainyImage from "../assets/rainy.jpg"; // <-- adjust based on your folder structure
import { useNavigate } from "react-router";
import ButtonX from "./ButtonX";
import Tooltip from "./HtmlLogo";

const DisplayCard = ({ template }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/send-email", {
      state: {
        templateHtml: template.html,
        title: template.title,
      },
    });
  };

  return (
    <div>
      <StyledWrapper onClick={handleClick} $background={template.bookImage}>
        <div
          className="book"
          style={{
            backgroundImage: `url(${template.coverImage})`,
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          <p>{template.title}</p>
          <div
            className="cover"
            style={{
              backgroundImage: `url(${template.bookImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <p>TEMPLATE IMAGE</p>
          </div>
        </div>
      </StyledWrapper>
      <ButtonX buttnText={"Send Now"} />
      <div className="html">
        {" "}
        {/* <Tooltip /> */}
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
    width: 320px;
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
    position: absolute;
    background-color: lightgray;
    width: 100%;
    height: 100%;
    border-radius: 10px;
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

  .book:hover .cover {
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    -webkit-transform: rotatey(-80deg);
    -ms-transform: rotatey(-80deg);
    transform: rotatey(-80deg);
  }

  p {
    font-size: 20px;
    font-weight: bolder;
  }
`;

export default DisplayCard;
