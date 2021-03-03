import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style"
import Form from "styles/FormBlock";
import Input from "components/Input"
import { ReactComponent as IllustrationImage } from "assets/img/personal-info.svg"

const StepOne = (props) => {
    return (
        <>
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
                        onChange={(e) => {
                            props.formData.name = e.target.value
                            props.setFormData({ ...props.formData })
                        }}
                    />
                    <Input
                        label={"Email Address"}
                        name={"email"}
                        id={"email"}
                        placeholder="johndoe@email.com"
                        onChange={(e) => {
                            props.formData.email = e.target.value
                            props.setFormData({ ...props.formData })
                        }}
                    />
                    <Input
                        label={"Phone Number"}
                        name={"phone"}
                        id={"phone"}
                        placeholder="08023456789"
                        onChange={(e) => {
                            props.formData.phone = e.target.value
                            props.setFormData({ ...props.formData })
                        }}
                    />
                </Form>
            </FormContainer>
        </>
    )
}

export default StepOne