import Logo from "assets/img/logo.png";
import Card from "components/Card"
import { Illustration, FormContainer } from "styles/style"
import IllustrationImage from "assets/img/services-info.png"
import Button from "styles/ButtonBlock";
import Paginate from 'react-paginate';

const StepThree = (props) => {
    return (
        <Card distribution={"row"} noBodyPadding>
            <Illustration>
                <img className="logo" src={Logo} alt={"PackMyLoad Logo"} style={{ marginBottom: "90px" }} />
                <img src={IllustrationImage} alt="services" />
            </Illustration>
            <FormContainer>
                <h1>HOW CAN WE HELP YOU?</h1>
                <h4>We offer a variety of services give the best experience possible. Which of these services are you asking about today?</h4>
                {/* <RadioContainer>
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
                </RadioContainer> */}
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

export default StepThree