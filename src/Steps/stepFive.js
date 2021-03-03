import Logo from "assets/img/logo.png";
import { Illustration, FormContainer } from "styles/style"
import IllustrationImage from "assets/img/address-info.png"
import Input from "components/Input"
import Form from "styles/FormBlock";

const StepFive = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: "51px" }} />
                <img src={IllustrationImage} alt="contact" />
            </Illustration>
            <FormContainer>
                <h1>WHAT ADDRESS ARE YOU MOVING FROM?</h1>
                <h4 style={{ width: "426px" }}>We’ll send our highly trained crew to this address to perform the services you have selected.</h4>
                <Form>
                    <Input
                        label={"Enter Address"}
                        name={"address"}
                        id={"address"}
                        placeholder="e.g 78, Bode Thomas Street"
                        onChange={(e) => {
                            props.formData.address = e.target.value
                            props.setFormData({ ...props.formData })
                        }}
                    />
                </Form>
            </FormContainer>
        </>
    )
}

export default StepFive