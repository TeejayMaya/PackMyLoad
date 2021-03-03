import React from "react"
import './styles/App.css';
import Card from "components/Card"
import StepOne from "Steps/stepOne"
import StepTwo from "Steps/stepTwo"
import StepThree from "Steps/stepThree"
import StepFour from "Steps/stepFour"
import StepFive from "Steps/stepFive"
import StepSix from "Steps/stepSix"
import StepSeven from "Steps/stepSeven"
import StepEight from "Steps/stepEight"
import { Pagination } from 'antd';
import Button from "styles/ButtonBlock";


function App() {
  const [formData, setFormData] = React.useState({})
  const [current, setCurrent] = React.useState(1);
  console.log(formData)

  const steps = [
    {
      content: <StepOne setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepTwo setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepThree setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepFour setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepFive setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepSix setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepSeven setFormData={setFormData} formData={formData} />,
    },
    {
      content: <StepEight setFormData={setFormData} formData={formData} />,
    },
  ];


  return (
    <div className="App">
      <>
        <Card distribution={"row"} distributionMobile={"column"} heightMobile={"100vh"} noBodyPadding>
          {steps[current - 1].content}
          <div className="steps-action">
            <Button center long
              onClick={() => {
                if (current < steps.length)
                  setCurrent(current + 1)
              }}>
              {current !== steps.length ? "continue" : "submit"}
            </Button>
            <Pagination
              current={current}
              pageSize={1}
              total={8}
              onChange={(current) => {
                setCurrent(current)
              }} />
          </div>
        </Card>
      </>
    </div>
  );
}

export default App;