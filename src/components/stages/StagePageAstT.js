import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const StagePageAstT = (props) => {
  // Global settings
  const leftEye = props.leftEye;
  const languageValue = useSelector((state) => state.languageValue);

  // Function to go to Astigmatism Test
  const goToAstT = () => {
    props.setShowStagePageAstT(false);
    props.setShowAstTest(true);
  };

  return (
    // Returning info text
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Проверьте, есть ли у вас астигматизм"}
          {languageValue === "english" && "Test if you have astigmatism"}
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
                Держите оба глаза открытыми и прикройте{" "}
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
                <p>Cосредоточьтесь на центре полукруга.</p>
                <p>
                 Все ли линии имеют одинаковый оттенок черного, или вы
                  видите ли вы, что некоторые линии выглядят размытыми или нечеткими в одном или нескольких
                  направлениях?
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
                  Do all the lines appear in the same shade of black, or do you
                  see that some lines appear blurred or unclear in one or more
                  directions?
                </p>
              </div>
            )}
            <div className="row">
              <Button
                type="button"
                onClick={(ev) => {
                  ev.preventDefault();
                  goToAstT();
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

export default StagePageAstT;
