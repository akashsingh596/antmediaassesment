import React, { useState } from "react";
import "../src/App.css";
import LeftArrow from "./left-arrow.png";
import RightArrow from "./right-arrow.png";
import one from "./1.png";


const App = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prevsSlide = React.useCallback(() => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  });

  const nextSlide = React.useCallback(() => {
    if (slideIndex < 3) {
      setSlideIndex(slideIndex + 1);
    }
  });

  const iconStyle = {
    slideOne: {
      background: "linear-gradient(90deg, #9c20aa 0%, #fb3570 100%)",
    },
    slideTwo: {
      background: "linear-gradient(90deg, #aa7a20 0%, #35fb87 100%)",
    },
    slideThree: {
      background: "linear-gradient(90deg, #6f11c7 0%, #00b1e7 100%)",
    },
    slideFour: {
      background: "linear-gradient(90deg, #aa7a20 0%, #9c20aa 100%)",
    },
  };
  return (
    <div className="mainWrapper">
      <div className="container">
        <div className="leftside">
          <div>
            <h1 className="mainHeading">APPLICATION</h1>
            <h1 className="journeyHeading">JOURNEY</h1>
          </div>
          <div className="linksMain">
            <div>
              <div className="wrapperImg">
                <div className="emptyImageDiv">
                  {slideIndex == 0 && (
                    <div className="imageCircleWrapper" style={iconStyle.slideOne}>
                      <img src={one} height={'40px'} width={'40px'}></img>
                    </div>
                  )}
                </div>
                <div className="links" onClick={() => setSlideIndex(0)}>
                  Appication
                </div>
              </div>
              <div className="wrapperImg">
                <div className="emptyImageDiv">
                  {slideIndex == 1 && (
                    <div className="imageCircleWrapper" style={iconStyle.slideTwo}>
                       <img src={one} height={'40px'} width={'40px'}></img>
                    </div>
                  )}
                </div>
                <div className="links" onClick={() => setSlideIndex(1)}>
                  Digital Self Assessment
                </div>
              </div>
              <div className="wrapperImg">
                <div className="emptyImageDiv">
                  {slideIndex == 2 && (
                    <div className="imageCircleWrapper" style={iconStyle.slideThree}>
                       <img src={one} height={'40px'} width={'40px'}></img>
                    </div>
                  )}
                </div>
                <div className="links" onClick={() => setSlideIndex(2)}>
                  Interview
                </div>
              </div>
              <div className="wrapperImg">
                <div className="emptyImageDiv">
                  {slideIndex == 3 && (
                    <div className="imageCircleWrapper" style={iconStyle.slideFour}>
                       <img src={one} height={'40px'} width={'40px'}></img>
                    </div>
                  )}
                </div>
                <div className="links" onClick={() => setSlideIndex(3)}>
                  Offer
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rightside">
          <div className="wrapperCircle">
            <div className="circle">
              {slideIndex == 0 && (
                <div>
                  <div className="leftButton">
                    <img
                      style={{ display: "none" }}
                      width={"45px"}
                      src={LeftArrow}
                      alt="&lt;"
                    />
                  </div>
                  <div className="white-grad">
                    <div className="details">
                      <h3 className="step">STEP 1</h3>
                      <h1 className="heading">Application</h1>
                      <p className="paragraph">
                        Fill up the quentionnaire for us to know you better
                      </p>
                      <button className="button" style={iconStyle.slideOne}>
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div
                    className="rightButton"
                    style={iconStyle.slideOne}
                    onClick={nextSlide}
                  >
                    <img width={"45px"} src={RightArrow} alt="&gt;" />
                  </div>
                </div>
              )}
              {slideIndex == 1 && (
                <div>
                  <div
                    className="leftButton"
                    style={iconStyle.slideTwo}
                    onClick={prevsSlide}
                  >
                    <img width={"45px"} src={LeftArrow} alt="&lt;" />
                  </div>
                  <div className="red-grad">
                    <div className="details">
                      <h3 className="step">STEP 2</h3>
                      <h1 className="heading">Digital Self Assessment</h1>
                      <p className="paragraph">
                        You can take it from anywhere, anytime and from any
                        device
                      </p>
                      <button className="button" style={iconStyle.slideTwo}>
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div
                    className="rightButton"
                    style={iconStyle.slideTwo}
                    onClick={nextSlide}
                  >
                    <img width={"45px"} src={RightArrow} alt="&gt;" />
                  </div>
                </div>
              )}
              {slideIndex == 2 && (
                <div>
                  <div
                    className="leftButton"
                    style={iconStyle.slideThree}
                    onClick={prevsSlide}
                  >
                    <img width={"45px"} src={LeftArrow} alt="&lt;" />
                  </div>
                  <div className="green-grad">
                    <div className="details">
                      <h3 className="step">STEP 3</h3>
                      <h1 className="heading">Interview</h1>
                      <p className="paragraph">
                        You have to give the technical interview from your
                        laptop and be ready with assessment
                      </p>
                      <button className="button" style={iconStyle.slideThree}>
                        Learn More
                      </button>
                    </div>
                  </div>
                  <div
                    className="rightButton"
                    style={iconStyle.slideThree}
                    onClick={nextSlide}
                  >
                    <img width={"45px"} src={RightArrow} alt="&gt;" />
                  </div>
                </div>
              )}
              {slideIndex == 3 && (
                <div>
                  <div
                    className="leftButton"
                    style={iconStyle.slideFour}
                    onClick={prevsSlide}
                  >
                    <img width={"45px"} src={LeftArrow} alt="&lt;" />
                  </div>
                  <div className="white-grad">
                    <div className="details">
                      <h3 className="step">STEP 4</h3>
                      <h1 className="heading">Offer</h1>
                      <p className="paragraph">
                        You have to give the technical interview from your
                        laptop and be ready with assessment
                      </p>
                      <button className="button" style={iconStyle.slideFour}>
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
