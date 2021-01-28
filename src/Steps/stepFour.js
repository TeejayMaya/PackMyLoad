import Logo from "assets/img/logo.png";
import Card from "components/Card"
import { Illustration, FormContainer, RadioContainer } from "styles/style"
import IllustrationImage from "assets/img/customer-info.png"
import Button from "styles/ButtonBlock";
import Paginate from 'react-paginate';
import EmailIcon from "assets/img/email.png";

const StepFour = (props) => {
    return (
        <Card distribution={"row"} noBodyPadding>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: 0 }} />
                <img src={IllustrationImage} alt="contact" />
            </Illustration>
            <FormContainer>
                <h1>ARE THIS SEVICES FOR A HOME OR BUSINESS?</h1>
                <h4 style={{ width: "426px" }}>Moving a household is different from moving a business! This information helps us allocate people and supplies to expertly execute your move.</h4>
                <RadioContainer>
                    <div className="radio">
                        <input type="radio" id="home" name="customer" value="home" />
                        <label for="home"
                            style={{
                                backgroundColor: "rgba(77, 183, 254, 0.1)",
                                boxShadow: "0px 3px 6px rgba(39, 45, 59, 0.2)"
                            }}>
                            <img src={EmailIcon} alt="Telephone Icon" />
                            <h3>Home</h3>
                        </label>
                    </div>
                    <div className="radio">
                        <input type="radio" id="business" name="customer" value="business" />
                        <label
                            for="business"
                            style={{
                                backgroundColor: "rgba(77, 183, 254, 0.1)",
                                boxShadow: "0px 3px 6px rgba(39, 45, 59, 0.2)"
                            }}>
                            <img src={EmailIcon} alt="Email Icon" />
                            <h3>Business</h3>
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

export default StepFour