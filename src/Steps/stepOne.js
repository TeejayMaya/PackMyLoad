import Logo from "assets/img/logo.png";
import Card from "components/Card"
import { Illustration, FormContainer } from "styles/style"
import Form from "styles/FormBlock";
import Input from "components/Input"
import { ReactComponent as IllustrationImage } from "assets/img/personal-info.svg"
import Button from "styles/ButtonBlock";
import Paginate from 'react-paginate';

const StepOne = (props) => {
    console.log(props)
    return (
        <Card distribution={"row"} noBodyPadding>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} />
                <IllustrationImage />
            </Illustration>
            <FormContainer>
                <h1>TELL US A LITTLE ABOUT YOURSELF</h1>
                <h4>Hello, good to have you here! Tell us you name, phone and email, and we will get you started.</h4>
                <Form>
                    <Input
                        label={"Full Name"}
                        name={"name"}
                        id={"name"}
                        placeholder="John Doe"
                    />
                    <Input
                        label={"Email Address"}
                        name={"email"}
                        id={"email"}
                        placeholder="johndoe@email.com"
                    />
                    <Input
                        label={"Phone Number"}
                        name={"phone"}
                        id={"phone"}
                        placeholder="08023456789"
                    />
                    <Button center long onClick={props.nextStep}>
                        continue
                    </Button>
                </Form>
                <Paginate
                    pageCount={props.totalSteps}
                    containerClassName={"pagination"}
                    previousClassName={"previous"}
                    nextClassName={"previous"}
                    pageLinkClassName={"pages"}
                    marginPagesDisplayed={1}
                    activeLinkClassName={"activePage"}
                    breakLinkClassName={"pages"}
                />
            </FormContainer>
        </Card>
    )
}

export default StepOne