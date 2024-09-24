// Copyright 2023 imvi labs & Malgorzata Pick
import { Fragment, useEffect, useState } from "react";
import WelcomePage from "../infoPages/WelcomePage";
import StagePageVAT from "../stages/StagePageVAT";
import VisualAcuityTest from "../tests/VisualAcuityTest";
import StagePageAstT from "../stages/StagePageAstT";
import AstigmatismTest from "../tests/AstigmatismTest";
import Result from "../infoPages/Result";

const VisionTestApp = () => {
  // Global settings
  const [leftEye, setLeftEye] = useState(true);
  const [rightEye, setRightEye] = useState(false);
  const [leftEyeScores, setLeftEyeScores] = useState(0);
  const [rightEyeScores, setRightEyeScores] = useState(0);
  const [leftEyeAnswer, setLeftEyeAnswer] = useState("");
  const [rightEyeAnswer, setRightEyeAnswer] = useState("");
  const [showWelcomePage, setShowWelcomePage] = useState(false);
  const [showStagePageVAT, setShowStagePageVAT] = useState(true);
  const [showVisualAcuityTest, setShowVisualAcuityTest] = useState(false);
  const [showStagePageAstT, setShowStagePageAstT] = useState(false);
  const [showAstTest, setShowAstTest] = useState(false);
  const [showResult, setShowResult] = useState(false);

  console.log("VisionTestApp component:");
  console.log(leftEye, rightEye);
  console.log(leftEyeScores, rightEyeScores);
  console.log("left: " + leftEyeAnswer + " right: " + rightEyeAnswer);
  console.log('start',)

  // Using effect to update states when they changes
  useEffect(() => {}, [
    showWelcomePage,
    showStagePageVAT,
    showVisualAcuityTest,
    showStagePageAstT,
    showAstTest,
    showResult,
    leftEye,
    rightEye,
    leftEyeScores,
    rightEyeScores,
    leftEyeAnswer,
    rightEyeAnswer,
  ]);

  return (
    // Returning components and showing that one depending on which one is active
    <Fragment>
      {/* {showWelcomePage && (
        <WelcomePage
          setShowWelcomePage={setShowWelcomePage}
          setShowStagePageVAT={setShowStagePageVAT}
        />
      )} */}
      {showStagePageVAT && (
        <StagePageVAT
          setShowStagePageVAT={setShowStagePageVAT}
          setShowVisualAcuityTest={setShowVisualAcuityTest}
          leftEye={leftEye}
          rightEye={rightEye}
          leftEyeScores={leftEyeScores}
          rightEyeScores={rightEyeScores}
        />
      )}
      {showVisualAcuityTest && (
        <VisualAcuityTest
          setShowStagePageVAT={setShowStagePageVAT}
          setShowVisualAcuityTest={setShowVisualAcuityTest}
          setShowStagePageAstT={setShowStagePageAstT}
          leftEye={leftEye}
          setLeftEye={setLeftEye}
          rightEye={rightEye}
          setRightEye={setRightEye}
          leftEyeScores={leftEyeScores}
          setLeftEyeScores={setLeftEyeScores}
          rightEyeScores={rightEyeScores}
          setRightEyeScores={setRightEyeScores}
        />
      )}
      {showStagePageAstT && (
        <StagePageAstT
          setShowStagePageAstT={setShowStagePageAstT}
          setShowAstTest={setShowAstTest}
          leftEye={leftEye}
          rightEye={rightEye}
          leftEyeScores={leftEyeScores}
          rightEyeScores={rightEyeScores}
          leftEyeAnswer={leftEyeAnswer}
          rightEyeAnswer={rightEyeAnswer}
        />
      )}
      {showAstTest && (
        <AstigmatismTest
          setShowStagePageAstT={setShowStagePageAstT}
          setShowAstTest={setShowAstTest}
          setShowResult={setShowResult}
          leftEye={leftEye}
          setLeftEye={setLeftEye}
          rightEye={rightEye}
          setRightEye={setRightEye}
          leftEyeScores={leftEyeScores}
          setLeftEyeScores={setLeftEyeScores}
          rightEyeScores={rightEyeScores}
          setRightEyeScores={setRightEyeScores}
          leftEyeAnswer={leftEyeAnswer}
          setLeftEyeAnswer={setLeftEyeAnswer}
          rightEyeAnswer={rightEyeAnswer}
          setRightEyeAnswer={setRightEyeAnswer}
        />
      )}
      {showResult && (
        <Result
          setShowResult={setShowResult}
          setShowStagePageVAT={setShowStagePageVAT}
          leftEye={leftEye}
          setLeftEye={setLeftEye}
          rightEye={rightEye}
          leftEyeScores={leftEyeScores}
          setLeftEyeScores={setLeftEyeScores}
          rightEyeScores={rightEyeScores}
          setRightEyeScores={setRightEyeScores}
          leftEyeAnswer={leftEyeAnswer}
          setLeftEyeAnswer={setLeftEyeAnswer}
          rightEyeAnswer={rightEyeAnswer}
          setRightEyeAnswer={setRightEyeAnswer}
        />
      )}
    </Fragment>
  );
};

export default VisionTestApp;
