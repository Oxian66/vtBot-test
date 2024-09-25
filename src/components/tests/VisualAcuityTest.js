import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import ArrowButton from "../UI/ArrowButton";

const VisualAcuityTest = (props) => {
  // Global settings
  const tumbelingESrcList = [
    process.env.PUBLIC_URL + "/images/E_left.jpg",
    process.env.PUBLIC_URL + "/images/E_right.jpg",
    process.env.PUBLIC_URL + "/images/E_up.jpg",
    process.env.PUBLIC_URL + "/images/E_down.jpg",
  ];
  const [randomImage, setRandomImage] = useState(
    process.env.PUBLIC_URL + "/images/E_left.jpg"
  );
  const [tumbelingEValue, setTumbelingEValue] = useState("left");
  const [eWidth, setEWith] = useState(20);
  const [eHeight, setEHeight] = useState(20);
  const [counter, setCounter] = useState(0);
  const leftEye = props.leftEye;
  const rightEye = props.rightEye;
  const leftEyeScores = props.leftEyeScores;
  const rightEyeScores = props.rightEyeScores;
  const languageValue = useSelector((state) => state.languageValue);

  // Using effect to change tumbeling E value when E-image changes
  useEffect(() => {
    if (randomImage === process.env.PUBLIC_URL + "/images/E_left.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "left"));
    } else if (randomImage === process.env.PUBLIC_URL + "/images/E_right.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "right"));
    } else if (randomImage === process.env.PUBLIC_URL + "/images/E_up.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "up"));
    } else if (randomImage === process.env.PUBLIC_URL + "/images/E_down.jpg") {
      setTumbelingEValue((tumbelingEValue) => (tumbelingEValue = "down"));
    }
  }, [randomImage, tumbelingEValue]);

  // Using effect to set size on tumbeling E
  useEffect(() => {
    document.querySelector(".e-img").style.height = eHeight + "px";
    document.querySelector(".e-img").style.width = eWidth + "px";
  }, [eWidth, eHeight]);

  // Using effect when counter = 4 to go to next stage
  useEffect(() => {
    if (counter === 4) {
      if (leftEye) {
        // Go to Stage Page for Visual Acuity Test
        props.setShowVisualAcuityTest(false);
        props.setShowStagePageVAT(true);
        props.setLeftEye(false);
        props.setRightEye(true);
      } else if (rightEye) {
        // Go to Stage Page for Astigmatism Test
        props.setShowVisualAcuityTest(false);
        props.setShowStagePageAstT(true);
        props.setLeftEye(true);
        props.setRightEye(false);
      }
      // Reseting counter and size of E
      setCounter((counter) => (counter = 0));
      setEHeight((eHeight) => (eHeight = 20));
      setEWith((eWidth) => (eWidth = 20));
    }
  }, [counter, leftEye, rightEye, props]);

  // Function for arrow-button click to check if correct arrow is clicked and to change size of E
  // If correct arrow is clicked - to add 1 score to result-scores
  const clickedArrow = (e) => {
    e.preventDefault();
    if (counter < 4) {
      setCounter((counter) => (counter = counter + 1));
      let direction = e.currentTarget.name;
      const randomIndex = Math.floor(Math.random() * tumbelingESrcList.length);
      setRandomImage(
        (randomImage) => (randomImage = tumbelingESrcList[randomIndex])
      );
      if (direction === tumbelingEValue) {
        if (leftEye) {
          props.setLeftEyeScores(leftEyeScores + 1);
        } else if (rightEye) {
          props.setRightEyeScores(rightEyeScores + 1);
        }
      }
      setEHeight((eHeight) => Math.round(eHeight * 0.84));
      setEWith((eWidth) => Math.round(eWidth * 0.84));
    }
  };

  return (
    // Returning visual acuity test
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Проверка вашей остроты зрения"}
          {languageValue === "english" && "Test your visual acuity"}
        </h2>
        <div className="row-col-layout">
          <div className="column">
            <ArrowButton name="up" onClick={(event) => clickedArrow(event)} />
            <div className="row">
              <ArrowButton
                name="left"
                onClick={(event) => clickedArrow(event)}
              />
              <img
                className="e-img"
                src={randomImage}
                alt="tumbling E"
                value={tumbelingEValue}
              />
              <ArrowButton
                name="right"
                onClick={(event) => clickedArrow(event)}
              />
            </div>
            <ArrowButton name="down" onClick={(event) => clickedArrow(event)} />
          </div>
          <div className="column">
            <Card>
              {leftEye ? (
                <div className="eye-row">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-hidden-64.png"}
                      alt="eye hidden"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-open-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                      alt="eye open"
                    />
                  </picture>
                </div>
              ) : (
                <div className="eye-row">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-open-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                      alt="eye open"
                    />
                  </picture>
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={process.env.PUBLIC_URL + "/images/eye-hidden-64.png"}
                      alt="eye hidden"
                    />
                  </picture>
                </div>
              )}
              {languageValue === "svenska" && (
                <div className="text">
                  <p>
                  Держите оба глаза открытыми и прикрывайте{" "}
                    {leftEye ? (
                      <span id="left-eye" style={{ fontWeight: "bold" }}>
                        левый
                      </span>
                    ) : (
                      <span id="right-eye" style={{ fontWeight: "bold" }}>
                        правый
                      </span>
                    )}{" "}
                    глаз.
                  </p>
                  <p>Сосредоточьтесь на символе E.</p>
                  <p>
                  Нажимайте на кнопки со стрелками, чтобы указать, в каком направлении
                  направлен символ E.
                  </p>
                </div>
              )}
              {languageValue === "english" && (
                <div className="text">
                  <p>
                    Keep both eyes open and cover the{" "}
                    {leftEye ? (
                      <span id="left-eye" style={{ fontWeight: "bold" }}>
                        left
                      </span>
                    ) : (
                      <span id="right-eye" style={{ fontWeight: "bold" }}>
                        right
                      </span>
                    )}{" "}
                    eye.
                  </p>
                  <p>Focus on the E symbol.</p>
                  <p>
                    Click the arrow keys to indicate which direction the E
                    symbol is facing.
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default VisualAcuityTest;
