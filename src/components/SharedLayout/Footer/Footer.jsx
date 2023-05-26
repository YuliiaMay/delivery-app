import { MdDoneOutline } from "react-icons/md";
import bottomBackground from "../../../images/backgrounds/bottom-bgn.png";
import Logo from "../Logo/Logo";
import { BottomBackground, BtnContent, Button, Container, FooterBox, Form, Input, Label } from "./Footer.styled";

const Footer = () => {
    return ( 
        <FooterBox>
            <Container>
                <Logo />
                <Form>
                    <Label htmlFor="email">Stay in the loop</Label>
                    <Input type="email" id="email" />
                    <Button>
                        <BtnContent>
                            <MdDoneOutline size={24}/>
                        </BtnContent>
                    </Button>
                </Form>
            </Container>


            <BottomBackground src={bottomBackground} alt="background" />
        </FooterBox>
    );
}

export default Footer;