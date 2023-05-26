import { Link } from "react-router-dom";
import heroImg from "../../../images/home/hero-img.png"
import { HeroBox, Container, Title, Description } from "./Hero.styled";



const Hero = () => {
    return ( 
        <HeroBox>
            <Container>
                <div>
                    <Title>Yummy! Food delivery for every day.</Title>
                    <Description>A wide selection of dishes from the chef: breakfast, pasta, pizza, meat, poultry and fish, desserts. Order your favorite dishes without leaving your home.</Description>
                    <Description>You will be shocked at the speed of delivery!</Description>
                    <Link to="/shop">
                        Go shopping!
                    </Link>
                </div>
                <img src={heroImg} alt="sandwich" width={350}/>
            </Container>
        </HeroBox>
    );
}

export default Hero;