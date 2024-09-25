import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const StagePageVAT = (props) => {
  // Global settings
  const leftEye = props.leftEye;
  const languageValue = useSelector((state) => state.languageValue);
 

  // Function to go to Visual Acuity Test
  const goToVAT = () => {
    props.setShowStagePageVAT(false);
    props.setShowVisualAcuityTest(true);
  };

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Проверка вашей остроты зрения"}
          {languageValue === "english" && "Test your visual acuity"}
        </h2>
        <div className="column">
          <Card>
            {leftEye ? (
              <div className="eye-row">
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                    }
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-64.png"
                    }
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-hidden-96.png"}
                    alt="eye hidden"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-48.png"}
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-open-96.png"}
                    alt="eye open"
                  />
                </picture>
              </div>
            ) : (
              <div className="eye-row">
                <picture>
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-48.png"}
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={process.env.PUBLIC_URL + "/images/eye-open-64.png"}
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-open-96.png"}
                    alt="eye open"
                  />
                </picture>
                <picture>
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-48.png"
                    }
                    media="(max-width: 440px)"
                  />
                  <source
                    srcSet={
                      process.env.PUBLIC_URL + "/images/eye-hidden-64.png"
                    }
                    media="(max-width: 770px)"
                  />
                  <img
                    src={process.env.PUBLIC_URL + "/images/eye-hidden-96.png"}
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
                <p>Сфокусируйтесь на символе E.</p>
                <p>
                Нажимайте кнопки со стрелками, чтобы указать, в какую сторону направлен символ E.
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
                  Click the arrow keys to indicate which direction the E symbol
                  is facing.
                </p>
              </div>
            )}
            <div className="row">
              <Button
                type="button"
                onClick={(ev) => {
                  ev.preventDefault();
                  goToVAT();
                }}
              >
                {languageValue === "svenska" && "Далее"}
                {languageValue === "english" && "Next"}
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </Fragment>
  );
};

export default StagePageVAT;
