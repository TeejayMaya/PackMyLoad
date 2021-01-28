import Logo from "assets/img/logo.png";
import Card from "components/Card"
import { Illustration, FormContainer, RadioContainer } from "styles/style"
import IllustrationImage from "assets/img/contact-info.png"
import Button from "styles/ButtonBlock";
import Paginate from 'react-paginate';
import EmailIcon from "assets/img/email.png";
import TelephonIcon from "assets/img/telephone.png";

const StepTwo = (props) => {
    return (
        <Card distribution={"row"} noBodyPadding>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: 0 }} />
                <img src={IllustrationImage} alt="contact" />
            </Illustration>
            <FormContainer>
                <h1 style={{ width: "449px", margin: "0 auto" }}>HOW WILL YOU LIKE US TO CONTACT YOU?</h1>
                <h4 style={{ width: "426px" }}>One of our move consultants will get in touch with you concerning your request, We do our best to use your preferred contact method, however in some cases a quick call may be required to clarify a few things.</h4>
                <RadioContainer>
                    <div className="radio">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label for="male">
                            <img src={TelephonIcon} alt="Telephone Icon" />
                            <h3>Phone</h3>
                        </label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="female" name="gender" value="female" />
                        <label for="female">
                            <img src={EmailIcon} alt="Email Icon" />
                            <h3>Email</h3>
                        </label>
                    </div>
                </RadioContainer>
                <Button center long onClick={props.nextStep}>
                    continue
                    </Button>
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

export default StepTwo