import './styles/App.css';
import Steps from "react-step-wizard"
import StepOne from "Steps/stepOne"
import StepTwo from "Steps/stepTwo"
import StepThree from "Steps/stepThree"
import StepFour from "Steps/stepFour"
// import StepFive from "Steps/stepFive"
// import StepSix from "Steps/stepSix"
// import StepSeven from "Steps/stepSeven"
// import StepEight from "Steps/stepEight"

function App() {
  return (
    <div className="App">
      <Steps>
        <StepOne />
        <StepTwo />
        <StepThree />
        <StepFour />
        {/* <StepFive />
        <StepSix />
        <StepSeven />
        <StepEight /> */}
      </Steps>
    </div>
  );
}

export default App;