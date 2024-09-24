import { Fragment, useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const Header = () => {
  // Global settings
  const [language, setLanguage] = useState("svenska");
  const dispatch = useDispatch();

  // Using effect to update language when it changes
  useEffect(() => {
    console.log(language);
    dispatch({ type: "UPDATE_HEADER_VALUE", payload: language });
  }, [language, dispatch]);

  // Function to change language in the app
  const changeLanguage = () => {
    if (language === "svenska") {
      setLanguage("english");
    } else {
      setLanguage("svenska");
    }
  };


  // Function to reset app / reload page and reset settings
  const resetApp = () => {
    window.location.reload();
  };

  // Returning header with logo and title with link
  return (
    <Fragment>
      <header className="header">
        {/* <a
          href="https://imvilabs.com/"
          title="www.imvilabs.com"
          target={"blank"}
        >
          <img
            id="header-imvi-logo"
            src={process.env.PUBLIC_URL + "/images/imvi-logo.png"}
            alt="imvi labs logo"
          />
        </a> */}
        <div className="nav-row">
          <h1
            className="header-title"
            title="Reset Test"
            onClick={(ev) => {
              ev.preventDefault();
              resetApp();
            }}
          >
            {language === "svenska" && "Тест зрения"}
            {language === "english" && "Vision test"}
          </h1>
          {language === "svenska" && (
            <img
              src={process.env.PUBLIC_URL + "/images/en.png"}
              alt="English flag"
              onClick={changeLanguage}
            />
          )}
          {language === "english" && (
            <img
              src={process.env.PUBLIC_URL + "/images/rus.png"}
              alt="Russian flag"
              onClick={changeLanguage}
              style={{width: "18px", height: "12px"}}
            />
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
