import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const Result = (props) => {
  // Global settings
  const leftEyeScores = props.leftEyeScores;
  const rightEyeScores = props.rightEyeScores;
  const leftEyeAnswer = props.leftEyeAnswer;
  const rightEyeAnswer = props.rightEyeAnswer;
  const languageValue = useSelector((state) => state.languageValue);

  // Function to go to Welcome Page and reset settings
  const goToWelcomePage = () => {
    props.setShowResult(false);
    // props.setShowWelcomePage(true);
    props.setShowStagePageVAT(true);
    props.setLeftEye(true);
    props.setLeftEyeScores(0);
    props.setRightEyeScores(0);
    props.setLeftEyeAnswer("");
    props.setRightEyeAnswer("");
  };

  return (
    // Returning result
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Ваш результат"}
          {languageValue === "english" && "Your result"}
        </h2>
        <div className="column">
          <Card>
            <div className="text container-result">
              <h3>
                {languageValue === "svenska" && "Острота зрения"}
                {languageValue === "english" && "Visual acuity"}
              </h3>
              {leftEyeScores >= 3 && rightEyeScores >= 3 ? (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_64.png"
                      }
                      alt="check icon by Akveo"
                    />
                  </picture>
                  {languageValue === "svenska" && (
                    <p>
                      Ваш результат показывает, что у вас нет проблем с остротой зрения.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      Your result shows that you have no problem with your
                      visual acuity.
                    </p>
                  )}
                </div>
              ) : (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/close_Akveo_64.png"
                      }
                      alt="close icon by Akveo"
                    />
                  </picture>
                  {languageValue === "svenska" && (
                    <p>
                      Ваш результат показывает, что у вас могут возникнуть проблемы с
                      остротой вашего зрения, и мы рекомендуем вам обратиться к
                      специалисту, чтобы это проверить.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      Your result shows that you may have some problems with
                      your visual acuity and we recommend that you see an
                      optician to have this verified.
                    </p>
                  )}
                </div>
              )}{" "}
            </div>
            <div className="text container-result">
              <h3>Астигматизм</h3>
              {leftEyeAnswer === "yes" && rightEyeAnswer === "yes" ? (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "/images/checkmark_Akveo_64.png"
                      }
                      alt="check icon by Akveo"
                    />
                  </picture>
                  {languageValue === "svenska" && (
                    <p>
                     Судя по всему, у вас нет симптомов
                     астигматизма.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      It appears that you are not showing symptoms of
                      astigmatism.
                    </p>
                  )}
                </div>
              ) : (
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/close_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/close_Akveo_64.png"
                      }
                      alt="close icon by Akveo"
                    />
                  </picture>
                  {languageValue === "svenska" && (
                    <p>
                      Похоже, у вас наблюдаются симптомы астигматизма.
                      и мы рекомендуем вам обратиться к специалисту, чтобы это
                      проверить.
                    </p>
                  )}
                  {languageValue === "english" && (
                    <p>
                      It appears that you are showing symptoms of astigmatism
                      and we recommend that you see an optician to have this
                      verified.
                    </p>
                  )}
                </div>
              )}
            </div>
          </Card>
          <div className="info-result">
            <h3>
              {languageValue === "svenska" && "Спасибо за уделенное время!"}
              {languageValue === "english" && "Thank you for your time!"}
            </h3>
            {/* <div className="row">
              <a href="https://imvilabs.com/" title="www.imvilabs.com">
                <Button type="button">
                  {languageValue === "svenska" && "К imvi labs"}
                  {languageValue === "english" && "To imvi labs"}
                </Button>
              </a>
            </div> */}
          </div>
          {leftEyeAnswer === "no" ||
          rightEyeAnswer === "no" ||
          leftEyeScores < 3 ||
          rightEyeScores < 3 ? (
            <Card>
              <div className="info-result">
                <div className="result">
                  <picture>
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/alert_Akveo_32.png"
                      }
                      media="(max-width: 440px)"
                    />
                    <source
                      srcSet={
                        process.env.PUBLIC_URL + "/images/alert_Akveo_48.png"
                      }
                      media="(max-width: 770px)"
                    />
                    <img
                      src={
                        process.env.PUBLIC_URL + "/images/alert_Akveo_64.png"
                      }
                      alt="help icon by Microsoft"
                    />
                  </picture>
                  <p className="text">
                    {languageValue === "svenska" &&
                      "Если вы считаете, что по ошибке ответили неправильно, пройдите тест еще раз."}
                    {languageValue === "english" &&
                      "If you think you have answered incorrectly by mistake, take the test again."}
                  </p>
                </div>
                <div className="row">
                  <Button
                    type="button"
                    onClick={(ev) => {
                      ev.preventDefault();
                      goToWelcomePage();
                    }}
                  >
                    {languageValue === "svenska" && "Начать сначала"}
                    {languageValue === "english" && "Start over"}
                  </Button>
                </div>
              </div>
            </Card>
          ) : (
            ""
          )}
        </div>
      </main>
    </Fragment>
  );
};

export default Result;
