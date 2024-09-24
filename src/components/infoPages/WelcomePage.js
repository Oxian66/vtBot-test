import { Fragment } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";
import Button from "../UI/Button";

const WelcomePage = (props) => {
  // Global settings
  const languageValue = useSelector((state) => state.languageValue);

  // Function to go to Stage Page for Visual Acuity Test
  const goToStagePageVAT = () => {
    props.setShowWelcomePage(false);
    props.setShowStagePageVAT(true);
  };

  return (
    // Returning info text on welcome page
    <Fragment>
      <main>
        <h2 className="page-title">
          {languageValue === "svenska" && "Här kan du göra vårt syntest"}
          {languageValue === "english" && "Here you can take our vision test"}
        </h2>
        <div className="row-col-layout">
          <div className="column">
            <img
              className="vision-test-img"
              src={process.env.PUBLIC_URL + "/images/vision-test-img.jpg"}
              alt="girl taking vision test"
            />
          </div>
          <div className="column">
            <Card>
              {languageValue === "svenska" && (
                <div className="text">
                  <p>
                    För att kunna träna din ögonkoordination är det viktigt att
                    du har en fungerande syn.
                  </p>
                  <p>
                    För vår ögonträning är två tester relevanta: synskärpa och
                    astigmatism.
                  </p>
                  <p>
                    Testerna ska göras på 40 cm avstånd från en mobilskärm eller
                    1 meters avstånd från en datorskärm.
                  </p>
                  <p>
                    Om du använder glasögon eller kontaktlinser för att se på
                    håll eller progressiva glas ska du behålla dessa på under
                    testet.
                  </p>
                  <p>
                    Detta test ersätter inte en komplett synundersökning som
                    görs av en optiker.
                  </p>
                  <p>
                    Om testet visar att du behöver en synundersökning bör du
                    uppsöka en optiker före start av vår träning.
                  </p>
                </div>
              )}
              {languageValue === "english" && (
                <div className="text">
                  <p>
                    To be able to train your eye coordination, it is important
                    that you have a functioning vision.
                  </p>
                  <p>
                    For our eye training, those two tests are relevant: visual
                    acuity and astigmatism.
                  </p>
                  <p>
                    The tests should be done at a distance of 40 cm from a
                    mobile screen or 1 meter from a computer screen.
                  </p>
                  <p>
                    If you wear glasses or contact lenses for distance vision or
                    progressive glasses, you should keep them on during the
                    test.
                  </p>
                  <p>
                    This test does not replace a complete eye examination
                    performed by an optician.
                  </p>
                  <p>
                    If the test shows that you need an eye examination, we
                    recommend you have a vision exam with an optician.
                  </p>
                </div>
              )}
              <div className="row">
                <Button
                  type="button"
                  onClick={(ev) => {
                    ev.preventDefault();
                    goToStagePageVAT();
                  }}
                >
                  {" "}
                  {languageValue === "svenska" && "Gör testet"}
                  {languageValue === "english" && "Do the test"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default WelcomePage;
