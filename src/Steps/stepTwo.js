import Logo from "assets/img/logo.png";
import { Illustration, FormContainer, RadioContainer } from "styles/style"
import IllustrationImage from "assets/img/contact-info.png"
import EmailIcon from "assets/img/email.png";
import TelephonIcon from "assets/img/telephone.png";

const StepTwo = (props) => {
    return (
        <>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: 0 }} />
                <img src={IllustrationImage} alt="contact" />
            </Illustration>
            <FormContainer>
                <h1 style={{ width: "449px", margin: "0 auto" }}>HOW WILL YOU LIKE US TO CONTACT YOU?</h1>
                <h4 style={{ width: "426px" }}>One of our move consultants will get in touch with you concerning your request, We do our best to use your preferred contact method, however in some cases a quick call may be required to clarify a few things.</h4>
                <RadioContainer>
                    <div className="radio">
                        <input
                            type="radio"
                            id="phone"
                            name="contactType"
                            value="phone"
                            onChange={(e) => {
                                props.formData.contactType = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="phone">
                            <img src={TelephonIcon} alt="Telephone Icon" />
                            <h3>Phone</h3>
                        </label>
                    </div>
                    <div className="radio">
                        <input
                            type="radio"
                            id="email"
                            name="contactType"
                            value="email"
                            onChange={(e) => {
                                props.formData.contactType = e.target.value
                                props.setFormData({ ...props.formData })
                            }}
                        />
                        <label htmlFor="email">
                            <img src={EmailIcon} alt="Email Icon" />
                            <h3>Email</h3>
                        </label>
                    </div>
                </RadioContainer>
            </FormContainer>
        </>
    )
}

export default StepTwo