import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AstigmatismTest = (props) => {
  // Global settings
  const leftEye = props.leftEye;
  const rightEye = props.rightEye;
  const languageValue = useSelector((state) => state.languageValue);

  // Function to get the value of answer and go to the next stage
  const clickedAstBtn = (e) => {
    e.preventDefault();
    let answer = e.currentTarget.value;
    // console.log(answer);
    if (leftEye) {
      props.setLeftEyeAnswer(answer);
      props.setShowAstTest(false);
      props.setShowStagePageAstT(true);
      props.setLeftEye(false);
      props.setRightEye(true);
    } else if (rightEye) {
      props.setRightEyeAnswer(answer);
      props.setShowAstTest(false);
      props.setShowResult(true);
      props.setLeftEye(false);
      props.setRightEye(false);
    }
  };

  // Returning astigmatism test
  return (
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Проверьте, есть ли у вас астигматизм"}
          {languageValue === "english" && "Test if you have astigmatism"}
        </h2>
        <div className="row-col-layout">
          <div className="column">
            <img
              className="astigmatism-img"
              src={process.env.PUBLIC_URL + "/images/astigmatism_test.jpg"}
              alt="astigmatism test chart"
            />
            <div className="column">
              <p className="text">
                {languageValue === "svenska" &&
                  "Все ли линии окрашены в один и тот же оттенок черного?"}
                {languageValue === "english" &&
                  "Do all the lines appear in the same shade of black?"}
              </p>
              <div className="row">
                <Button
                  type="submit"
                  className="blue-btn"
                  value="yes"
                  onClick={(event) => clickedAstBtn(event)}
                >
                  {languageValue === "svenska" && "Да"}
                  {languageValue === "english" && "Yes"}
                </Button>
                <Button
                  type="submit"
                  className="blue-btn"
                  value="no"
                  onClick={(event) => clickedAstBtn(event)}
                >
                  {languageValue === "svenska" && "Нет"}
                  {languageValue === "english" && "No"}
                </Button>
              </div>
            </div>
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
                  <p>Сосредоточьтесь на центре полукруга.</p>
                  <p>
                  Все ли линии окрашены в один и тот же оттенок черного или
                    вы видите, что некоторые линии кажутся размытыми или нечеткими в одном или
                    еще направления?
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
                  <p>Focus on the center of the semicircle.</p>
                  <p>
                    Do all the lines appear in the same shade of black, or do
                    you see that some lines appear blurred or unclear in one or
                    more directions?
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

export default AstigmatismTest;
